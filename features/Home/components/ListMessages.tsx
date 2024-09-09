'use client'

import { db } from '@/lib/firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const ListMessages = () => {
  const [messages, setMessages] = useState<string[]>([])
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesArray: string[] = []
      querySnapshot.forEach((doc) => {
        messagesArray.push(doc.data().text)
      })
      setMessages(messagesArray)
    })

    return () => unsubscribe()
  }, [])

  return (
    <div className="overflow-auto">
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  )
}
export default ListMessages
