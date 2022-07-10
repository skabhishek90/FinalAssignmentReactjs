import express from "express";
import cors from "cors";
import './connect.js'
import Project from "./schema.js"
const app = express();
app.use(cors())
app.use(express.json())
app.get("/project",async(req,res)=>{
        try {
            const project = await Project.find({})
            if(project){
                res.status(200).json(project)
            }
            else {
                res.status(404).send('error')
            }
        }
        catch (err) {
            res.status(500).send('error')
        }
} )
app.listen(5000,()=>{
    console.log("listening")
})