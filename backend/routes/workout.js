const express=require('express')
const router=express.Router()
const Workout=require('../models/workoutmodel')
const {createWorkout,getById,getAll,deleteWorkout,updateAworkout}=require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

//require Auth for all routes
router.use(requireAuth)

/**
 * 
 */
router.get('/',getAll)

/**
 * get a single workout by id
 * param id
 */
router.get('/:id',getById)
router.post('/',createWorkout)
router.delete('/:id',deleteWorkout)
router.patch('/:id',updateAworkout)

module.exports=router