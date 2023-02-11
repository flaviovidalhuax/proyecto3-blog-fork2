
const PostControlers=require('./posts.controllers')

const getAllPost=(req, res)=>{
    PostControlers.findAllPosts()
        .then(data=> {  res.status(200).json(data)})
        .catch(err=>{   res.status(400).json(err)})
}

const getPostByID=(req, res)=>{
    const id=Number(req.params.id)
    PostControlers.findPostById(id)
        .then(data=>{
            if (data) {
                res.status(200).json(data)
            }else{
                res.status(404).json({message:'Post don`t fount'})
            }
        })
        .catch(err=>{res.status(400).json(err)})
}

const postNewPost=(req, res)=>{
    const PsotObj=req.body
    PostControlers.createPost(PsotObj)
        .then(data=>{ res.status(201).json(data)})
        .catch(err=>{ res.status(400).json(err)})
}

const deletePostByID=(req, res)=>{
    const id=Number(req.params.id)
    PostControlers.deletePost(id)
        .then(data=>{
            if (data) {
                res.status(204).json({message:'it has been remove'})
            }else{
                res.status(404).json({message:'Post don´t found'})
            }
        })
        .catch(err=>{ res.status(400).json(err)})
}

const pushPostById=(req, res)=>{
    const id= Number(req.params.id)
    const PostObj=req.body
    PostControlers.updatePost(id, PostObj)
        .then(data=>{
            if (data) {
                res.status(200).json({message:`Post with ${id} update seccesfully`})
            }else{
                res.status(404).json({message:'Post don`t found'})
            }
        })
        .catch(err=>{
            res.status(400).json(err)
        })
}

const putPostById =(req, res)=>{
    const id =Number(req.params.id)
    const PostObj=req.body
    if (!PostObj.content || !PsotObj.userName || !PostObj.isPublished) {
        return res.status(400).json({
            message:'missing data',
            fields:{
                content:'string',
                userName:'string',
                isPublished:'YYYY/MOTH/DAY'
            }

        })
       }

    PostControlers.updatePost(id,PostObj)
        .then(data=>{
                if (data) {
                    res.status(200).json({message:`Post with ${id} update succesfully`})
                }else{
                    res.status(204).json({message:'Post dont found'})
                }
            })
        .catch(err=> {
            res.status(400).json(err)
        })
                
}



module.exports={
    getAllPost,
    getPostByID,
    postNewPost,
    deletePostByID,
    pushPostById,
    putPostById
}