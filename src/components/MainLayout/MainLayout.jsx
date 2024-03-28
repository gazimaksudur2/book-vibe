import Footer from '../Footer/Footer';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    // const books = useLoaderData();
    // console.log(books);
    return (
        <div className='h-screen flex flex-col justify-between'>
            <div className='mx-1 md:mx-[2%] mb-5 mt-4 md:mb-10 md:mt-8'>
                <Navbar />
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;