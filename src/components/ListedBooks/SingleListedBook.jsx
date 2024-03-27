import { useLoaderData, useParams, useLocation } from 'react-router-dom';

const SingleListedBook = () => {

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('myStatus');

    const books = useLoaderData();
    const { id } = useParams();
    // console.log(status);
    // console.log(books);
    const book = books.find((book) => parseInt(book.bookId) === parseInt(id));

    const { image, author, bookName, category, publisher, review, totalPages, tags, rating, yearOfPublishing } = book;
    return (
        <div className='font-workSans flex justify-center items-center gap-16 mx-[2%] my-12'>
            <img className='md:w-[25%] h-full object-cover p-10' src={image} alt="single book" />
            <div className="info space-y-3 md:w-[40%]">
                <div className="flex justify-between items-center">
                    <h1 className='font-playfair text-[#131313] inline text-4xl font-bold'>{bookName}</h1>
                    <h4 className={`inline ml-10 text-2xl font-semibold font-workSans p-4 rounded-badge text-white ${status==='read'?'bg-green-400':'bg-red-400'}`}>{status}</h4>
                </div>
                <h5 className='text-[#131313ac] text-xl py-1 font-medium'>By : {author}</h5>
                <h4 className='text-[#131313ab] py-4 border-y-2 border-dashed border-gray-300 text-xl font-medium'>{category}</h4>
                <p className='py-3 text-[#131313a0] text-lg font-normal'><span className='text-[#131313] font-bold pr-3'>Review:</span>{review.slice(0,200)}</p>
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
            </div>
        </div>
    );
};

export default SingleListedBook;