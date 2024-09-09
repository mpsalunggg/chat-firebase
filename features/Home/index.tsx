'use client'

import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import ListMessages from './components/ListMessages'

const Chat = () => {
  const [newMessage, setNewMessage] = useState<string>('')

  const sendMessage = async () => {
    if (newMessage.trim()) {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        timestamp: new Date(),
      })
      setNewMessage('')
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border rounded- shadow-md h-1/2 p-4">
        <ListMessages />
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage} className="bg-orange-400 p-2 rounded-md">
          Send
        </button>
      </div>
    </div>
  )
}

export default Chat
