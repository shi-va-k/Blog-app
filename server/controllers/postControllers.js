// create a post
//POST: api/posts
//protected

const createPost = async(req, res, next)=>{
    res.join('Create post')
}
// get all posts
//GET: api/posts
//protected

const getPosts = async(req, res, next)=>{
    res.join('get all posts')
}
// get single post
//GET: api/posts
//unprotected

const getPost = async(req, res, next)=>{
    res.join('get post')
}
// get post by user
//GET: api/posts/users/:id
//unprotected

const getUserPosts = async(req, res, next)=>{
    res.join('get user posts')
}
// edit post
//PATCH: api/posts/:id
//protected

const editPost = async(req, res, next)=>{
    res.join('edit post')
}
// delete post
//DELETE: api/posts/:id
//protected

const deletePost = async(req, res, next)=>{
    res.join('delete post')
}

module.exports = {deletePost, editPost, getUserPosts, getPost, getPosts, createPost}