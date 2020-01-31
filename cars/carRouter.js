const express = require('express');
// 

const db = require('../data/db-config');
const router = express.Router();

router.get('/', (req,res)=> {
    db('cars')
    .then(cars=> {
        res.json(cars)
    })
    .catch(err => {
        res.status(500).json({message: "Failed to retrieve cars"})
    });
});

 router.post('/', (req,res)=> {
     const carData = req.body;
     db('cars').insert(carData)
     .then(car=> {
         res.status(201).json(car)
     });
 })


 router.get('/:id', (req,res)=> {
     db('cars')
     .where({id: req.params.id})
     .then(car=> {
         res.status(200).json(car)
     })
     .catch((err=> res.status(500).json({message:'could not get the car'})))
 })
 router.delete('/:id', (req,res)=> {
     db('cars')
     .where({id: req.params.id})
     .del()
     .then(count=> {
         res.status(200).json({message: 'The car has been DESTROYED!!'})
     })
     .catch(()=> {
         res.status(500).json({message: 'could not delete.'})
     })
 
 })

 router.put('/:id', (req,res)=> {
     db('cars')
     .where({id: req.params.id})
     .update(req.body)
     .then(car=> {
         if(car){
             res.status(200).json({message:`${car} has been updated`})
         }else{
             res.status(500).json({message: 'Error updating.'})
         }
     })
 })
  


module.exports = router;

 