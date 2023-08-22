const mongoose=require ('mongoose');

const subscriberSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    subscribedToChannel:{
        type:String,
        require:true
        // default:Date.now
    },

    subscribedDate:{
        type:Date,
        required:true,
        default:Date.now
    }



})
module.exports=mongoose.model("Subscriber",subscriberSchema);