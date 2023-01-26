import mongoose from "mongoose";
// specific mongodb uri query for mongodb atlas cluster
const connectDB = (url) => {
 mongoose.set('strictQuery',true);   

mongoose.connect(url)
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log(err));
}


export default connectDB;