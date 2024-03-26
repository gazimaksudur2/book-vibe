import { useLoaderData } from 'react-router-dom'
// import PropTypes from 'prop-types'
import Book from './Book';

const Books = () => {
    const books = useLoaderData();
    // console.log(books);
    return (
        <div className='flex flex-col justify-center items-center space-y-16'>
            <h2 className='font-playfair text-[#131313] text-4xl font-bold'>Books</h2>
            <div className='w-full mt- grid grid-cols-3 justify-evenly justify-items-center gap-10'>
                {
                    books.map((book)=><Book book={book} key={book.bookId}/>)
                }
            </div>
        </div>
    );
};

// Books.propTypes = {
//     books: PropTypes.array,
// }

export default Books;