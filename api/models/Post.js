const mongoose = require("mongoose")
const User = require("./User")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post title must be provided"]
    },
    body: {
        type: String,
        required: [true, "Post body most be provided"]
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "Author needed"]
    },
},
{
    timestamps: true
}
)

const Post = mongoose.model("Post",postSchema)

module.exports = Post