module.exports = app => {
    const posts = require('../controllers/posts.controllers')

    var router = require('express').Router();

    //create a new post
    router.post("/",posts.create)

    //retrieve all posts
    router.get('/',posts.findAll);

    //retrieve published posts
    // router.get('published',posts.findAllPublished);

    app.use('/api/posts',router)
}