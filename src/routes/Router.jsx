import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import Banner from "../components/Home/Banner";
import Books from "../components/Home/Books";
import SingleBook from "../components/Home/SingleBook";
import ListedBooks from "../components/ListedBooks/ListedBooks";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        loader: ()=> fetch('./books.json'),
        children:[
            {
                index: '/',
                element:<Home/>,
                loader: ()=> fetch('./books.json'),
                children:[
                    {
                        index: true,
                        element:<Banner/>
                    },
                    {
                        path: '/books',
                        element: <Books/>,
                        loader: ()=> fetch('./books.json'),
                    }
                ]
            },
            {
                path: '/book/:id',
                element: <SingleBook />,
                loader: ()=> fetch('./books.json'),                         
            },
            {
                path: '/listedbooks',
                element: <ListedBooks />,
                loader: ()=> fetch('./books.json'),                         
            },
            {
                path: '/toread',
                element: <SingleBook />,
                loader: ()=> fetch('./books.json'),                         
            },
            {
                path: '/newarrival',
                element: <SingleBook />,
                loader: ()=> fetch('./books.json'),                         
            },
            {
                path: '/faq',
                element: <SingleBook />,
                loader: ()=> fetch('./books.json'),                         
            }
        ]
    }
]);

export default router;