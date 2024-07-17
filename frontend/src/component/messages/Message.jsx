import React from "react"
import userAvatar from "../../assets/user.png"
import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation"
import { formatTime } from "../../utils/formatTime"

const Message = ({ message }) => {
  // console.log(message)
  const { authUser } = useAuthContext()

  const { selectedConversation } = useConversation()

  const messageFromMe = message.senderId === authUser._id

  const chatClassName = messageFromMe ? "chat-end" : "chat-start"

  const profilePic = messageFromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic

  const msgBgColor = messageFromMe ? "bg-green-500" : ""

  const formattedTime = formatTime(message.createdAt)

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="User Avatar" />
        </div>
      </div>

      <div className={`chat-bubble text-white ${msgBgColor}`}>
        {message.message}
      </div>

      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-950">
        {formattedTime}
      </div>
    </div>
  )
}

export default Message
