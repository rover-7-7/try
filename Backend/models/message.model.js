import mongoose from mongoose;
const messageSchema = new mongoose.Schema({
senderID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    require:true
},
recieverID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    require:true
},
message:{
    type:String,
    require: true
}
},{timestamps:true});

const Message=mongoose.model("Message",messageSchema);
export default Message;