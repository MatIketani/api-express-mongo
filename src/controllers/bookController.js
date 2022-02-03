const express = require('express');
const Book = require('../models/book');

const createRoute = ('/create', async (req, res)=>{
    try {
        const book = await Book.create(req.body);

        return res.send({ book })
    } catch(err){
        return res.status(400).send({error: 'Creation failed'})
    }
});

const getRoute = ('/', async(req,res)=>{
    try{
        const book = await Book.find();

        return res.send( { book } )
    } catch(err){
        return res.status(400).send({error: 'Error fetching books'})
    }
});

const deleteRoute = ('/delete', async(req,res)=>{
    try{
        const book = await Book.findOneAndDelete(req.body)

        return res.send({ book })
    } catch(err){
        return res.status(400).send({error: 'Error deleting book'})
    }
});

const updateRoute = ('/update/:id', async(req,res)=>{
    var id = req.params.id

    try{
        const book = await Book.findByIdAndUpdate(`${id}`)
        
        return res.send({ book })
    } catch(err){
        return res.status(400).send({error: 'Error updating book'})
    }
})

module.exports = { createRoute, getRoute, deleteRoute, updateRoute }