import PropTypes from 'prop-types';
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, author, bookName, category, tags, rating } = book;
    return (
        <div>
            <Link to={`/book/${bookId}`} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="book" className="w-80 h-56 object-contain rounded-xl bg-[#F3F3F3]" />
                </figure>
                <div className="card-body items-start text-center">
                    <div className='w-full flex items-center justify-center gap-3'>
                        {
                            tags.slice(0,2).map((tag, idx)=>(<span key={idx} className='inline text-[#23BE0A] text-lg font-medium'>#{tag}</span>))
                        }
                    </div>
                    <div className='w-full flex flex-col pb-4 mb-4 items-start gap-2 border-b-2 border-dashed border-gray-400'>
                        <h2 className="card-title">{bookName}</h2>
                        <h5>By : {author}</h5>
                    </div>
                    <div className="w-full card-actions flex justify-between items-center">
                        <h5>{category}</h5>
                        <div className='flex justify-center items-center gap-3'>
                            <h5>{rating}</h5>
                            <IoIosStarOutline className='mb-1 text-lg'/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
}

export default Book;