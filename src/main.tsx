import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import './index.css'
import LogPage from './logPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route index element={<LogPage />}/>
      <Route path='/login' element={<SignIn />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='*' element={<LogPage />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
