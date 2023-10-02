import mongoose  from "mongoose";

const Connection = async () => {
    const URL = `mongodb://localhost:27017/employee`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});
        console.log('Database connnected Successfully');
    }catch(error){
        console.log("Error while connecting with the database",error);
    }
}

export default Connection;  