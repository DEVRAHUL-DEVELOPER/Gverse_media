import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    mediatype:{
        type:String,
        enum:["image","video"],
        required:true
    },
    media:{
        type:String,
        required:true
    },
    caption:{
        type:String
    },
    likes:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User"
    }]
},{timestamps:true})

const Post = mongoose.model("User",PostSchema)

export default Post