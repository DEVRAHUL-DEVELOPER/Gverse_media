import mongoose from "mongoose";

const DBconnect = async ()=>{
    try {

      await mongoose.connect("mongodb+srv://Gverse_8059:UwmzgiS2Oouwdy0q@cluster0.icywzh9.mongodb.net/GVERSE")
        console.log("DB Connect");
        
    } catch (error) {

        console.log("DB connect error");
    }
}

export default DBconnect;