const postServices =require('./posts.services')
const router=require('express').Router()


router.get('/post', postServices.getAllPost)
router.post('/post', postServices.postNewPost)
router.get('/post/:id', postServices.getPostByID)
router.delete('/post/:id', postServices.deletePostByID)

module.exports=router