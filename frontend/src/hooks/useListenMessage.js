import React, { useEffect } from 'react';
import { useSocketContext } from '../context/socketContext';
import useConversation from "../zustand/useConversation";
import notifySound from "../assets/notification/notification.mp3";

const useListenMessage = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
       newMessage.shouldShake = true;
       const sound = new Audio(notifySound);
       sound.play();
       setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages])
}

export default useListenMessage;
