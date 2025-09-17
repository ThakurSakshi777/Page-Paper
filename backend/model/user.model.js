import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
     fullname:{
        type:String,
        require:true,
        unique:true
    },
     fullname:{
        type:String,
        require:true
    }
})

const User = mongoose.model("User", userSchema);
export default User;