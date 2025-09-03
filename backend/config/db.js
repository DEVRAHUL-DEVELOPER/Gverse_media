import mongoose from "mongoose";

const DBconnect = async ()=>{
    try {

      await mongoose.connect(process.env.MONGODB);
        console.log("DB Connect");
        
    } catch (error) {

        console.log("DB connect error");
    }
}

export default DBconnect;