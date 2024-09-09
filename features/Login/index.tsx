/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useEffect, FC } from 'react'
import { auth, googleProvider } from '@/lib/firebase'
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth'

const Login: FC = () => {
  const [user, setUser] = useState<null | User>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error('Error signing!', error)
    }
  }

  const handleSignOut = async () => {
    await signOut(auth)
  }

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-2">
      <h1 className="text-3xl font-semibold">Google Sign-In with Firebase</h1>
      {user ? (
        <div className="flex justify-center items-center flex-col">
          <p className="text-md mb-3">
            Helloooo,{' '}
            <span className="text-orange-400 font-semibold">
              {user.displayName}
            </span>
          </p>
          <button
            onClick={handleSignOut}
            className="bg-orange-400 p-2 rounded-md text-white w-24"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            onClick={handleGoogleSignIn}
            className="bg-orange-400 p-2 rounded-md text-white"
          >
            Sign In with Google
          </button>
        </div>
      )}
    </div>
  )
}

export default Login
