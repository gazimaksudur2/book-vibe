import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar flex font-workSans justify-between bg-base-100 w-full p-2 rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-48 gap-5 text-[#131313bd] text-lg font-normal ">
                    <NavLink className={({isActive})=>isActive?'text-[#13be0a] -my-2 px-2 py-2 border-2 border-[#13be0aa0] rounded-2xl':''} to={'/'}>Home</NavLink>
                    <NavLink className={({isActive})=>isActive?'text-[#13be0a] -my-2 px-2 py-2 border-2 border-[#13be0aa0] rounded-2xl':''} to={'/listedbooks'}>Listed Books</NavLink>
                    <NavLink className={({isActive})=>isActive?'text-[#13be0a] -my-2 px-2 py-2 border-2 border-[#13be0aa0] rounded-2xl':''} to={'/toread'}>Pages to Read</NavLink>
                    <NavLink className={({isActive})=>isActive?'text-[#13be0a] -my-2 px-2 py-2 border-2 border-[#13be0aa0] rounded-2xl':''} to={'/newarrival'}>New Arrivals</NavLink>
                    <NavLink className={({isActive})=>isActive?'text-[#13be0a] -my-2 px-2 py-2 border-2 border-[#13be0aa0] rounded-2xl':''} to={'/faq'}>FAQs & Help</NavLink>
                    </ul>
                </div>
                <img src="https://i.ibb.co/wK7JHDJ/book.png" className="w-8" alt="app-icon" />
                <a className="ml-4 text-3xl text-[#131313] font-bold">ReadiVerse</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#131313bd] text-lg font-normal justify-center items-center gap-10">
                    <NavLink className={({isActive})=>isActive?'text-[#13be0a] -mx-4 px-4 py-2 border-2 border-[#13be0aa0] rounded-2xl':''} to={'/'}>Home</NavLink>
                    <NavLink className={({isActive})=>isActive?'text-[#13be0a] -mx-4 px-4 py-2 border-2 border-[#13be0aa0] rounded-2xl':''} to={'/listedbooks'}>Listed Books</NavLink>
                    <NavLink className={({isActive})=>isActive?'text-[#13be0a] -mx-4 px-4 py-2 border-2 border-[#13be0aa0] rounded-2xl':''} to={'/toread'}>Pages to Read</NavLink>
                    <NavLink className={({isActive})=>isActive?'text-[#13be0a] -mx-4 px-4 py-2 border-2 border-[#13be0aa0] rounded-2xl':''} to={'/newarrival'}>New Arrivals</NavLink>
                    <NavLink className={({isActive})=>isActive?'text-[#13be0a] -mx-4 px-4 py-2 border-2 border-[#13be0aa0] rounded-2xl':''} to={'/faq'}>FAQs & Help</NavLink>
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