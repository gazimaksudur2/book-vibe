import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row py-[10%] space-y-10 justify-evenly items-center rounded-2xl mx-[1%] my-5 md:my-10 md:p-[4%] bg-[#1313130d]">
            <div className="md:w-[40%] md:h-96 text-center space-y-6 md:text-start flex flex-col justify-evenly items-center md:items-start">
                <h1 className="text-4xl md:text-6xl font-bold text-[#131313] font-playfair">Books to freshen up your bookshelf</h1>
                <Link to={'/listedbooks'}>
                    <button className="px-6 py-3 rounded-lg bg-[#23BE0A] hover:bg-[#23BE0Aac] active:scale-95 text-white text-lg font-semibold">View The List</button>
                </Link>
            </div>
            <img className="w-96" src="https://i.ibb.co/Qj2jgfn/book1.png" alt="Banner_book" />

        </div>
    );
};

export default Banner;