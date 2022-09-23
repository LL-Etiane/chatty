const express = require("express")

const postController = require("../controllers/postController")
const isLogin = require("../middlewares/authMiddleware")

const router = express.Router()

router.get("/",postController.getAllPosts)
router.post("/",isLogin,postController.createPost)
router.get("/:id",postController.getSinglePost)
router.put("/:id",isLogin,postController.updatePost)
router.delete("/:id",isLogin,postController.deletePost)

module.exports = router