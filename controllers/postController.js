const Post = require("../models/Post")
const mongoose = require("mongoose")
const User = require("../models/User")

exports.getAllPosts = async (req, res, next)=>{
    try {
        const posts = await Post.find()
        return res.status(200).json({
            postCount: posts.length,
            posts
        })
    } catch (error) {
        return res.status(400)
    }
}

exports.getSinglePost = async (req, res, next) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(404).json({message: "Invalid post id"})
    }
    try {
        const post = await Post.findById(req.params.id)
        if(!post){
            return res.status(404).json({message: "Invalid post id"})
        }
        return res.status(200).json(post)
    } catch (error) {
        return res.status(400)
    }
}

exports.createPost = async (req, res, next) => {
    try {
        user = await User.findById(req.userId)
        const {title, body} = req.body
        const post = await Post.create({
            title: title,
            body: body,
            author: user
        })

        return res.status(200).json({
            "id": post._id,
            "title": post.title,
            "body": post.body
        })
    } catch (error) {
        if(error.name === "ValidationError"){
            let errors = {}
            Object.keys(error.errors).forEach((key)=>{
                errors[key] = error.errors[key].message
            })

            res.status(400).json(errors)
        }else{
            res.status(500).json({
                "message": "There was an error creating post"
            })
        }   
    }
}

exports.updatePost = async (req, res, next) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(404).json({message: "Invalid post id"})
    }
    try {
        const post = await Post.findById(req.params.id,req.body).populate("author")
    
        
        if(!post){
            return res.status(400).json({message: "Invalid id provided"})
        }

        if(post.author._id != req.userId){
            return res.status(400).json({message: "You are not authorised to perform this action"})
        }

        const updatedPost = await post.updateOne(req.body)

        return res.status(200).json({message: "Success"})
    } catch (error) {
        return res.status(500).json({message: "There was a problem updaing post"})
    }
}

exports.deletePost = async (req, res, next) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(404).json({message: "Invalid post id"})
    }

    try {
        const post = await Post.findById(req.params.id).populate("author")
        
        if(!post){
            return res.status(400).json({message: "Invalid id provided"})
        }

        if(post.author._id != req.userId){
            return res.status(400).json({message: "You are not authorised to perform this action"})
        }
        
        await post.delete()
        return res.status(200).json({message: "Post deleted successfully"})
    } catch (error) {
        return res.status(500).message({message: "There was a problem deleting post"})
    }
}