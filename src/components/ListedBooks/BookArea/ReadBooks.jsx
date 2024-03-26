import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import { getItem } from '../../../utils/utility';
import ListedBookCard from './ListedBookCard';

const ReadBooks = () => {
    const [books, setBooks] = useState([]);
    const bks = useLoaderData();
    const localbks = getItem('read');
    useEffect(()=>{
        const bkarray = bks.filter((bk)=>localbks.includes(bk.bookId));
        setBooks(bkarray);
    },[]);
    // console.log(books);
    return (
        <div className='w-full flex flex-col justify-between md:gap-8 py-10'>
            {
                books.map((book)=><ListedBookCard key={book.bookId} book={book}/>)
            }
        </div>
    );
};

export default ReadBooks;