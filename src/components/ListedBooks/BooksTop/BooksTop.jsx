import PropTypes from 'prop-types';

const BooksTop = ({handleSort}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[95%] mx-auto flex justify-center items-center rounded-2xl my-10 p-[4%] bg-[#1313130d]">
                <h1 className="text-6xl font-bold text-[#131313] font-playfair">Books</h1>
            </div>
            <details className="dropdown ">
                <summary className="m-1 px-6 py-3 rounded-lg bg-[#23BE0A] hover:bg-[#23BE0Aac] active:scale-95 text-white text-lg font-semibold">Sort By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleSort("rating")}><a>Rating</a></li>
                    <li onClick={()=>handleSort("totalPages")}><a>Number of Pages</a></li>
                    <li onClick={()=>handleSort("yearOfPublishing")}><a>Published year</a></li>
                </ul>
            </details>
        </div>
    );
};

BooksTop.propTypes = {
    handleSort: PropTypes.func.isRequired,
}

export default BooksTop;