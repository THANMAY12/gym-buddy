const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const workoutroutes=require('./routes/workout')
const userRoutes=require('./routes/user')
dotenv.config()
// express app
const app=express();
const cors = require('cors')
app.use(cors())
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))
const PORT=process.env.PORT;
mongoose.connect(process.env.MONGO_DB_URL).then(()=>{console.log("connected");}).catch((error)=>{
    console.log(error);
})
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.get('/',(req,res)=>{
    res.json({msg:"running"});
})
//routes
app.use('/api/workouts',workoutroutes)
app.use('/api/user',userRoutes)

// listen
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})