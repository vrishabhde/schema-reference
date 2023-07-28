import mongoose, { Schema } from "mongoose";  


const newproduct = new Schema({
    pname:String,
    pprice:String,
    refcategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
});

export default mongoose.model("products", newproduct);