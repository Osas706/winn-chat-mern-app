import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src="../../../public/avatar.jpeg" alt="" />
        </div>
      </div>

      <div className="chat-bubble text-white bg-orange-600 opacity-70">
         Hi, whats up
      </div>

      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:33
      </div>
    </div>
  )
}

export default Message
