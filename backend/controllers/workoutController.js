const Workoutdb=require('../models/workoutmodel')
const mongoose=require('mongoose')
// get all


exports.getAll = async (req, res) => {
    try {
        const user_id=req.user._id;
        const workouts = await Workoutdb.find({user_id}).sort({ createdAt: -1 });

        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}
// get single 
exports.getById=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }
    const workout=await Workoutdb.findById(id)
    if(!workout){
        return res.status(404).json({
            error:"no such workout"
        })
    }
    res.status(200).json(workout)
}

// create a new workout

exports.createWorkout=async (req,res)=>{
    
    const {title,load,reps}=req.body;
    let emptyFields=[];
    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length>0){
        return res.status(400).json({
            error:'Please fill out all the fields',
            emptyFields
        })
    }

        //add
    try{
        const user_id=req.user._id;
        const workout=await Workoutdb.create({title,load,reps,user_id})
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({
            error:error.message
        })
    }
    
}

//delete a workout
exports.deleteWorkout=async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such workouts"})
    }
    const workout=await Workoutdb.findByIdAndDelete({_id:id});
    if(!workout) return res.status(400).json({error:"no such workout to delete"})
    return res.status(200).json(workout
    )
}

// update a workout


exports.updateAworkout=async (req,res)=>{
    const {id}=req.params
    const workout=await Workoutdb.findOneAndUpdate(
        {
            _id:id
        },{
            ...req.body
        },{
            new:true
        })
        if(!workout){
            return res.status(400).json({error:"no such workout"})
        }
        res.status(200).json(workout)
}