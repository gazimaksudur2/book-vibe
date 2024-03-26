import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import Banner from "../components/Home/Banner";
import Books from "../components/Home/Books";
import SingleBook from "../components/Home/SingleBook";

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
                        children:[
                            {
                                path: '/books/:id',
                                element: <SingleBook />,
                                
                            }
                        ]
                    }
                ]
            },
        ]
    }
]);

export default router;