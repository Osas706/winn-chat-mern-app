import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]},
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        };

        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id)
        };

        //await conversation.save();
        //await newMessage.save();

        //this wil run in parallel
        await Promise.all([ conversation.save(), newMessage.save()]);

                
        //SOCKET IO section
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            // io.to(<socket_id>).emit() is used to send events to specific client
            io.to(receiverSocketId).emit("newMessage", newMessage)
        };

        res.status(201).json(newMessage);
        
    } catch (error) {
        console.log("Error in sendMessage controller", error);
        res.status(500).json({error: "Internal Server Error"})
    };
};

export const getMessages = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]},
        }).populate("messages"); // not reference but actual message

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessage controller", error);
        res.status(500).json({error: "Internal Server Error"})
    };
};

export const deleteMessage = async(req, res) => {
   try {
       // const deletedMsg = await Message.findById(req.params._id);

       // if(!deletedMsg){
      //      return res.status(404).json('msg not found');
      //  };

        await Message.findByIdAndDelete(req.params.id);
        res.status(200).json('MSG HAS BEEN DELETED!');

   } catch (error) {
       console.log("Error in deleteMessage controller", error);
       res.status(500).json({error: "Internal Server Error"})
   }
} 