import Footer from '../Footer/Footer';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    // const books = useLoaderData();
    // console.log(books);
    return (
        <div>
            <div className='mx-[2%] my-14'>
                <Navbar />
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;