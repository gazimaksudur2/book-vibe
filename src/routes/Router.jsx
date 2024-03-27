import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Banner from "../components/Home/Banner";
import Books from "../components/Home/Books";
import SingleBook from "../components/Home/SingleBook";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import ToRead from "../components/ToRead/ToRead";
import NewArrival from "../components/NewArrival/NewArrival";
import FAQ from "../components/FAQ/FAQ";
import NotFoundPage from "../components/NotFound/NotFoundPage";
import SingleListedBook from "../components/ListedBooks/SingleListedBook";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        errorElement: <NotFoundPage />,
        loader: ()=> fetch('/books.json'),
        children:[
            {
                index: '/',
                element:<Home />,
                loader: ()=> fetch('/books.json'),
                children:[
                    {
                        index: true,
                        element:<Banner/>
                    },
                    {
                        path: '/books',
                        element: <Books/>,
                        loader: ()=> fetch('/books.json'),
                    }
                ]
            },
            {
                path: '/book/:id',
                element: <SingleBook />,
                loader: ()=> fetch('/books.json'),                         
            },
            {
                path: '/listedbooks',
                element: <ListedBooks />,
                loader: ()=> fetch('/books.json'),
            },
            {
                path: '/listedbook/:id',
                element: <SingleListedBook />,
                loader: ()=>fetch('/books.json'),
            },
            {
                path: '/toread',
                element: <ToRead />,
                loader: ()=> fetch('/books.json'),                       
            },
            {
                path: '/newarrival',
                element: <NewArrival />,
                loader: ()=> fetch('/books.json'),                         
            },
            {
                path: '/faq',
                element: <FAQ />,
                loader: ()=> fetch('/books.json'),                         
            }
        ]
    }
]);

export default router;

