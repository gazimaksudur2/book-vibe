import { useParams, useLoaderData } from 'react-router-dom';
import { addItem, exists, removeItem } from '../../utils/utility';
import toast from 'react-hot-toast';

const SingleBook = () => {
    const books = useLoaderData();
    const { id } = useParams();
    // console.log(id);
    // console.log(books);
    const book = books.find((book) => parseInt(book.bookId) === parseInt(id));
    // console.log(book);
    const handleRead = (id) => {
        if (exists('read', id)) {
            toast.error('Already in read!!');
            console.log(id);
            return;
        } else if (exists('wishlist', id)) {
            // toast.loading('Transferred from wishlist to readlist!!');
            toast.success('Transferred from wishlist to readlist!!');

            removeItem('wishlist', id);
            addItem('read', id);
            return;
        }
        setTimeout(() => {
            addItem('read', id);
            toast.success('Added to read successfully!!');
        }, 500)
    }
    const handleWishlist = (id) => {
        if (exists('wishlist', id)) {
            toast.error('Already in wishlist!!');
            return;
        } else if (exists('read', id)) {
            toast.error('That book already in read list!!');
            return;
        }
        addItem('wishlist', id);
        toast.success('Added to wishlist successfully!!');
    }

    const { bookId, image, author, bookName, category, publisher, review, totalPages, tags, rating, yearOfPublishing } = book;
    return (
        <div className='font-workSans flex flex-col md:flex-row justify-center items-center md:gap-16 mx-[4%] md:mx-[2%] my-5 md:my-12'>
            <img className='w-[70%] md:w-[35%] h-full object-cover p-10' src={image} alt="single book" />
            <div className="info space-y-3 md:w-[40%]">
                <h1 className='font-playfair text-[#131313] text-3xl md:text-4xl font-bold'>{bookName}</h1>
                <h5 className='text-[#131313ac] text-lg md:text-xl py-1 font-medium'>By : {author}</h5>
                <h4 className='text-[#131313ab] text-lg md:text-xl py-2 md:py-4 border-y-2 border-dashed border-gray-300 font-medium'>{category}</h4>
                <p className='py-3 text-[#131313a0] text-lg font-normal'><span className='text-[#131313] font-bold pr-3'>Review:</span>{review}</p>
                <div className="tags flex justify-start items-center gap-5 border-b-2 border-gray-300 pb-10">
                    <h3 className='text-[131313] text-lg font-bold'>Tag</h3>
                    {
                        tags.map((tag, idx) => <span key={idx} className='text-[#23BE0A] text-lg font-medium'>#{tag}</span>)
                    }
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            <tr className='hover'>
                                <td className='text-[#131313ad] text-lg font-normal'>Number of Pages:</td>
                                <td className='text-[#131313] text-lg font-semibold'>{totalPages}</td>
                            </tr>
                            <tr className='hover'>
                                <td className='text-[#131313ad] text-lg font-normal'>Publisher:</td>
                                <td className='text-[#131313] text-lg font-semibold'>{publisher}</td>
                            </tr>
                            <tr className='hover'>
                                <td className='text-[#131313ad] text-lg font-normal'>Year of Publishing:</td>
                                <td className='text-[#131313] text-lg font-semibold'>{yearOfPublishing}</td>
                            </tr>
                            <tr className='hover'>
                                <td className='text-[#131313ad] text-lg font-normal'>Rating:</td>
                                <td className='text-[#131313] text-lg font-semibold'>{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="btns flex gap-5">
                    <button onClick={() => handleRead(bookId)} className="btn btn-outline ">Read</button>
                    <button onClick={() => handleWishlist(bookId)} className="btn btn-success text-white bg-[#23BE0A] hover:bg-[#23be0ac0]">Wishlist</button>
                </div>
            </div>
        </div>
    );
};


export default SingleBook;