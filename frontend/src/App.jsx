import { useEffect, useState } from 'react'


import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SettingPage from './pages/SettingPage'
import { useAuthStore } from './store/useAuthStore.js'
import { Loader } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useThemeStore } from './store/useThemeStrore.js'

function App() {
  
const {authUser,checkAuth,isCheckingAuth}=useAuthStore()
const {theme}=useThemeStore()
    useEffect(()=>{
      checkAuth()
    },[checkAuth])

    console.log({authUser})
  if (isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
      <Loader className="size-10 animate-spin"/>
    </div>
  )




  return (
    <div data-theme="theme">
    
    <Navbar />
    <Routes>
      <Route path="/" element={authUser?<HomePage/>:<Navigate to="/login"/>}/>
      <Route path="/signup" element={!authUser?<SignUpPage/>:<Navigate to="/"/>}/>
      <Route path="/login" element={!authUser?<LoginPage/>:<Navigate to="/"/>}/>
      <Route path="/profile" element={authUser?<ProfilePage/>:<Navigate to="/login"/>}/>
      <Route path="/setting" element={<SettingPage/>}/>
    </Routes>
    <Toaster/>
    </div>
  )
}

export default App
