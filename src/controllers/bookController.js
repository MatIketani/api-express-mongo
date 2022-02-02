const express = require('express');
const { paperFormats } = require('puppeteer-core');
const Book = require('../models/book');
const router = express.Router();


router.post('/create', async (req, res)=>{
    try {
        const book = await Book.create(req.body);

        return res.send({ book })
    } catch(err){
        return res.status(400).send({error: 'Creation failed'})
    }
});

router.get('/', async(req,res)=>{
    try{
        const book = await Book.find();

        return res.send( { book } )
    } catch(err){
        return res.status(400).send({error: 'Error fetching books'})
    }
});

router.delete('/delete', async(req,res)=>{
    try{
        const book = await Book.findOneAndDelete(req.body)

        return res.send({ book })
    } catch(err){
        return res.status(400).send({error: 'Error deleting book'})
    }
});

router.post('/update/:id', async(req,res)=>{
    var id = req.params.id

    try{
        const book = await Book.findByIdAndUpdate(`${id}`)
        
        return res.send({ book })
    } catch(err){
        return res.status(400).send({error: 'Error updating book'})
    }
})

module.exports = app => app.use('/book', router)