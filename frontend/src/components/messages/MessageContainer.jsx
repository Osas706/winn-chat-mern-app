import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChat from "../NoChat"

const MessageContainer = () => {
  const noChatSelected = true;

  return (
    <div className='md:min-w-[450px] flex flex-col' >

      {noChatSelected ? <NoChat /> : (
        <>
          {/* Header */}
          <div className='bg-gray-800 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>{" "} <span className='text-gray-300 font-bold'>Winn</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}  
    </div>
  )
}

export default MessageContainer
