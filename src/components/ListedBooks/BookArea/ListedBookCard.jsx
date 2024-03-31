import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ListedBookCard = ({ book, myStatus }) => {
    const { bookId, image, author, bookName, category, publisher, totalPages, tags, rating, yearOfPublishing } = book;
    return (
        <div className='w-full'>
            <div className="w-full p-2 md:p-8 bg-base-100 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-16 rounded-2xl">
                <figure className="px-4 md:px-10 pt-10">
                    <img src={image} alt="book" className="w-[90%] md:w-80 h-80 object-contain rounded-xl bg-[#F3F3F3]" />
                </figure>
                <div className="info space-y-3 w-full">
                    <h1 className='font-playfair text-[#131313] text-2xl md:text-3xl font-bold'>{bookName}</h1>
                    <h5 className='text-[#131313ac] text-lg md:text-xl py-1 font-medium'>By : {author}</h5>
                    <div className="tags flex justify-start md:inline items-center">
                        <h3 className='text-[131313] text-lg inline font-bold mr-8'>Tag</h3>
                        {
                            tags.slice(0,2).map((tag, idx) => <span key={idx} className='text-[#23BE0A] mr-4 text-lg font-medium'>#{tag}</span>)
                        }
                    </div>
                    <div className='pt-3 md:pt-0 flex items-center justify-start md:inline gap-1'>
                        <CiLocationOn className='text-xl md:ml-8 md:inline' />
                        <p className='md:inline md:mr-4'>Year of Publishing: </p>
                        <span>{yearOfPublishing}</span>
                    </div>
                    <div className='text-lg py-3 font-normal flex flex-col md:flex-row md:items-center justify-start gap-3 md:gap-6 border-b-2 border-gray-300'>
                        <div className="flex items-center justify-start gap-3">
                            <IoPeopleOutline className='text-xl' />
                            <span> Publisher : {publisher}</span>
                        </div>
                        <div className="flex items-center justify-start gap-3">
                            <IoDocumentTextOutline className='text-xl' />
                            <span> Page : {totalPages}</span>
                        </div>

                    </div>
                    <div className="btns flex flex-wrap gap-2 items-center justify-center md:justify-start md:gap-5 pt-5 md:pt-0">
                        <button className="text-[#328eff] bg-[#328eff3a] px-6 py-3 rounded-full active:scale-95">Category: {category}</button>
                        <button className="text-[#ffac33] bg-[#ffac333a] px-6 py-3 rounded-full active:scale-95">Rating: {rating}</button>
                        <Link to={`/listedbook/${bookId}?myStatus=${myStatus}`} >
                            <button className="btn btn-success text-white bg-[#23BE0A] hover:bg-[#23be0ac0] rounded-full">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ListedBookCard.propTypes = {
    book: PropTypes.object.isRequired,
    myStatus: PropTypes.string,
}

export default ListedBookCard;