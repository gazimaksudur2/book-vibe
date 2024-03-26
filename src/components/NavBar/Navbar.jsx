import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar flex font-workSans justify-between bg-base-100 w-full p-2 rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Listed Books</a></li>
                        <li><a>Pages to Read</a></li>
                        <li><a>New Arrivals</a></li>
                        <li><a>FAQs & Help</a></li>
                    </ul>
                </div>
                <img src="https://i.ibb.co/wK7JHDJ/book.png" className="w-8" alt="app-icon" />
                <a className="ml-4 text-3xl text-[#131313] font-bold">ReadiVerse</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink className={'bg-white'} to={'/'}><a>Home</a></NavLink>
                    <NavLink className={'bg-white'} to={'/'}><a>Listed Books</a></NavLink>
                    <NavLink className={'bg-white'} to={'/'}><a>Pages to Read</a></NavLink>
                    <NavLink className={'bg-white'} to={'/'}><a>New Arrivals</a></NavLink>
                    <NavLink className={'bg-white'} to={'/'}><a>FAQs & Help</a></NavLink>
                </ul>
            </div>
            <div className="navbar-end flex justify-end gap-10 mr-10">
                <button className="btn px-4 py-2 bg-[#23BE0A] hover:bg-[#23BE0Aac] text-white text-lg font-semibold">Sign In</button>
                <button className="btn px-4 py-2 btn-active bg-[#59C6D2] hover:bg-[#59C6D2ac] text-white text-lg font-semibold">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;