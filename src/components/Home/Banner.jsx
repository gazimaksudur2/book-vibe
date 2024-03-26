import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex justify-evenly items-center rounded-2xl mx-[1%] my-10 p-[4%] bg-[#1313130d]">
            <div className="w-[40%] h-96 flex flex-col justify-evenly items-start">
                <h1 className="text-6xl font-bold text-[#131313] font-playfair">Books to freshen up your bookshelf</h1>
                <Link to={'/listedbooks'}>
                    <button className="px-6 py-3 rounded-lg bg-[#23BE0A] hover:bg-[#23BE0Aac] active:scale-95 text-white text-lg font-semibold">View The List</button>
                </Link>
            </div>
            <img className="w-96" src="https://i.ibb.co/Qj2jgfn/book1.png" alt="Banner_book" />

        </div>
    );
};

export default Banner;