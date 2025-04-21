import mongoose from "mongoose"
export const connectDb=async()=>{
try{
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected")

}
catch(eror){
      console.log("eror")
}
};