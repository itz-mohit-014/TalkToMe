import { History, MessageSquare } from 'lucide-react'
import React from 'react'

const LeftSidebar = ({chatHistory, setAllMessageList}) => {

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
    <div className="p-4 border-b border-gray-200">
      <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        <History className="w-5 h-5" />
        Chat History
      </h1>
    </div>
    <div className="overflow-y-auto flex-1">
      {chatHistory.map((chat) => (
        <div
          key={chat.id}
          className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
        >
          <div className="flex items-center gap-3">
            <MessageSquare className="w-4 h-4 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-800">{chat?.title}</p>
              <p className="text-xs text-gray-500">{chat?.createdAt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default LeftSidebar