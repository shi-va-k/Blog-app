import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter} from 'react-router-dom'
import Layout from './component/Layout'
import ErrorPage from './pages/ErrorPage'
import {RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Register from './pages/Register'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import Users from './pages/Users'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import UserPosts from './pages/UserPosts'
import DashBoard from './pages/DashBoard'
import Logout from './pages/Logout'
import DeletePost from './pages/DeletePost'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home />},
            {path: 'posts/:id', element: <PostDetail />},
            {path: 'register', element: <Register />},
            {path: 'login', element: <Login />},
            {path: 'profile/:id', element: <UserProfile />},
            {path: 'users', element: <Users />},
            {path: 'create', element: <CreatePost />},
            {path: 'posts/:id/edit', element: <EditPost />},
            {path: 'posts/:id/delete', element: <DeletePost />},
            {path: 'posts/:users/:id', element: <UserPosts />},
            {path: 'myposts/:id', element: <DashBoard />},
            {path: 'logout', element: <Logout />},
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>

    </React.StrictMode>
)