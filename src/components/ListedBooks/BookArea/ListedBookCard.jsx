import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ListedBookCard = ({ book }) => {
    const { bookId, image, author, bookName, category, publisher, totalPages, tags, rating, yearOfPublishing } = book;
    return (
        <div>
            <div className="card w-full md:p-8 bg-base-100 shadow-xl flex-row items-center md:gap-16">
                <figure className="px-10 pt-10">
                    <img src={image} alt="book" className="w-80 h-80 object-contain rounded-xl bg-[#F3F3F3]" />
                </figure>
                <div className="info space-y-3 w-full">
                    <h1 className='font-playfair text-[#131313] text-3xl font-bold'>{bookName}</h1>
                    <h5 className='text-[#131313ac] text-xl py-1 font-medium'>By : {author}</h5>
                    <div className="tags flex justify-start items-center gap-5">
                        <h3 className='text-[131313] text-lg font-bold'>Tag</h3>
                        {
                            tags.map((tag, idx) => <span key={idx} className='text-[#23BE0A] text-lg font-medium'>#{tag}</span>)
                        }
                        <div className='flex items-center justify-center gap-1'>
                            <CiLocationOn className='text-xl' />
                            <p>Year of Publishing: </p>
                            <span>{yearOfPublishing}</span>
                        </div>
                    </div>
                    <div className='text-lg py-3 font-normal flex items-center justify-start gap-6 border-b-2 border-gray-300'>
                        <div className="flex items-center justify-start gap-3">
                            <IoPeopleOutline className='text-xl' />
                            <span> Publisher : {publisher}</span>
                        </div>
                        <div className="flex items-center justify-start gap-3">
                            <IoDocumentTextOutline className='text-xl' />
                            <span> Page : {totalPages}</span>
                        </div>

                    </div>
                    <div className="btns flex gap-5">
                        <button className="text-[#328eff] bg-[#328eff3a] px-6 rounded-full active:scale-95">Category: {category}</button>
                        <button className="text-[#ffac33] bg-[#ffac333a] px-6 rounded-full active:scale-95">Rating: {rating}</button>
                        <Link>
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
}

export default ListedBookCard;