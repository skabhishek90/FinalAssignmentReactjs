import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name:String
  })
const Project = new mongoose.model('Project',ProjectSchema);
  
export default Project;