import mongoose from "mongoose";

const connectMongoDB = async ()=>{
      try {
         await  mongoose.connect(process.env.MONGODB_URL);
          console.log("Databasee Connect successfully");
      }
      catch(err){
        return err.message;
      }
}
export default connectMongoDB;