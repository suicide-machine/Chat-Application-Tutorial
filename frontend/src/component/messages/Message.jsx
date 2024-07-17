import React from "react"
import userAvatar from "../../assets/user.png"

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={userAvatar} alt="User Avatar" />
        </div>
      </div>

      <div className="chat-bubble text-white bg-blue-500">Hello</div>

      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-950">
        10:41
      </div>
    </div>
  )
}

export default Message
