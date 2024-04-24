import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChat from "../NoChat"
import useConversation from '../../zustand/useConversation';

const MessageContainer = () => {
 const {selectedConversation, setSelectedConversation} = useConversation();

 useEffect(() => {
    //cleanup function(unmount)
    return () => setSelectedConversation(null)
 }, [setSelectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col' >

      {!selectedConversation ? <NoChat /> : (
        <>
          {/* Header */}
          <div className='bg-gray-800 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>{" "} <span className='text-gray-300 font-bold'>{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}  
    </div>
  )
}

export default MessageContainer
