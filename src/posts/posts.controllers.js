const Post=require('../models/posts.models')

const findAllPosts = async() => {
   const data= await Post.findAll()
   return data
}

const findPostById = async(id) => {
    const data= await Post.findOne({
        where:{
            id:id
        }
    })
    return data
}

const createPost = async(obj) => {
    const dataObj={
        content: obj.content,
        userName: obj.userName,
        isPublished: obj.isPublished,
    }
    const data= await Post.create(dataObj)
    return data
}

const updatePost = async(id, obj) => {
    const data = await Post.update(obj, {
        where: {id: id}
    })
    return data[0]
}

const deletePost = async(id) => {
    const data= Post.destroy({
        where:{id:id}
    })
    return data

}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
