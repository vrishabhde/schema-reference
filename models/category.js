import mongoose, { Schema } from "mongoose"; 


const newcategory = new Schema({
    categoryname:String,
    categoryid:String
});


export default mongoose.model("category", newcategory);