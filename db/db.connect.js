import mongoose from "mongoose";
const connectDb=async(uri)=>{
        await mongoose.connect(uri);
                }
                export default connectDb;
               
                