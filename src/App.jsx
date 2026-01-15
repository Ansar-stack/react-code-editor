import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import RootLayouts from './layouts/RootLayouts'
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayouts />}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
    </Route>
  ))
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App