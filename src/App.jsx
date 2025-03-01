
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import About from './components/routes/About'
import HomePage from './components/routes/HomePage'
import Project from './components/routes/Project'

function App() {
 

  const router=createBrowserRouter([
    {
path:'/',
// index:true,
element:<NavBar/>,
children:[
  {
     // path:'/home',
    index:true,
    element:<HomePage/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/project',
    element:<Project/>

  }
  
]
     }
])
  return (
    <>
      {/* <h2>This is my app</h2> */}

<RouterProvider router={router}/>
      </>
  )
}

export default App
