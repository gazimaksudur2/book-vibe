import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    // const [theme, setTheme] = useState('fantasy');

    // useEffect(() => {
    //     const localTheme = localStorage.getItem('theme');
    //     document.querySelector('html').setAttribute('data-theme', localTheme);
    // }, []);

    const handleTheme = (e) => {
        // console.log(e.target.checked);
        // console.log('before -> ',theme); 
        if (e.target.checked) {
            // setTheme('dracula');
            document.querySelector('html').setAttribute('data-theme', 'dracula');
            // console.log('set to -> dracula');
        } else {
            // setTheme('fantasy');
            // console.log('set to -> fantasy');
            document.querySelector('html').setAttribute('data-theme', 'fantasy');
        }
        // localStorage.setItem('theme', theme);
        // document.querySelector('html').setAttribute('data-theme', theme);
        // console.log('after -> ',theme);
    };
    return (
        <div className="navbar flex font-workSans justify-between bg-base-100 w-full md:p-2 rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-48 gap-5 text-[#131313bd] text-lg font-normal ">
                        <NavLink className={({ isActive }) => isActive ? 'text-[#13be0a] -my-2 px-2 py-2 border-2 border-[#13be0aa0] rounded-2xl' : ''} to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#13be0a] -my-2 px-2 py-2 border-2 border-[#13be0aa0] rounded-2xl' : ''} to={'/listedbooks'}>Listed Books</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#13be0a] -my-2 px-2 py-2 border-2 border-[#13be0aa0] rounded-2xl' : ''} to={'/toread'}>Pages to Read</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#13be0a] -my-2 px-2 py-2 border-2 border-[#13be0aa0] rounded-2xl' : ''} to={'/newarrival'}>New Arrivals</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#13be0a] -my-2 px-2 py-2 border-2 border-[#13be0aa0] rounded-2xl' : ''} to={'/faq'}>FAQs & Help</NavLink>
                        <button className="btn px-4 py-2 bg-[#23BE0A] hover:bg-[#23BE0Aac] text-white text-lg font-semibold">Sign In</button>
                        <button className="btn px-4 py-2 btn-active bg-[#59C6D2] hover:bg-[#59C6D2ac] text-white text-lg font-semibold">Sign Up</button>
                    </ul>
                </div>
                <img src="https://i.ibb.co/wK7JHDJ/book.png" className="w-8" alt="app-icon" />
                <Link to={'/'} className="ml-4 text-3xl text-[#131313] font-bold">ReadiVerse</Link>
            </div>
            <div className="navbar-center w-[50%] hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#131313bd] text-lg font-normal justify-between items-center w-full flex-1">
                    <NavLink className={({ isActive }) => isActive ? 'text-[#13be0a] -mx-4 px-4 py-2 border-2 border-[#13be0aa0] rounded-2xl' : ''} to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#13be0a] -mx-4 px-4 py-2 border-2 border-[#13be0aa0] rounded-2xl' : ''} to={'/listedbooks'}>Listed Books</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#13be0a] -mx-4 px-4 py-2 border-2 border-[#13be0aa0] rounded-2xl' : ''} to={'/toread'}>Pages to Read</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#13be0a] -mx-4 px-4 py-2 border-2 border-[#13be0aa0] rounded-2xl' : ''} to={'/newarrival'}>New Arrivals</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#13be0a] -mx-4 px-4 py-2 border-2 border-[#13be0aa0] rounded-2xl' : ''} to={'/faq'}>FAQs & Help</NavLink>
                </ul>
            </div>
            <div className="navbar-end flex justify-end gap-10 mr-10">
                <div className="hidden  md:flex w-[60%] justify-evenly">
                    <button className="btn px-4 py-2 bg-[#23BE0A] hover:bg-[#23BE0Aac] text-white text-lg font-semibold">Sign In</button>
                    <button className="btn px-4 py-2 btn-active bg-[#59C6D2] hover:bg-[#59C6D2ac] text-white text-lg font-semibold">Sign Up</button>
                </div>
                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handleTheme} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;

// theme controller is not working and netlify deploy showing dangerous 