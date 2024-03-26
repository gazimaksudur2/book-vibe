import Footer from '../Footer/Footer';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    // const books = useLoaderData();
    // console.log(books);
    return (
        <div className='h-screen flex flex-col justify-between'>
            <div className='mx-[2%] mb-10 mt-8'>
                <Navbar />
                <div className= 'h-[77vh]'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;