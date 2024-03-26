import { useState } from 'react';
import BookArea2 from './BookArea/BookArea2';
import BooksTop from './BooksTop/BooksTop';

const ListedBooks = () => {
    const [sortOrder, setSortOrder] = useState('');

    const handleSort = (srtorder)=>{
        setSortOrder(srtorder);
        // console.log(sortOrder);
    }
    return (
        <div>
            <BooksTop handleSort={handleSort}/>
            <BookArea2 sortOrder={sortOrder}/>
            {/* <BookArea /> */}
        </div>
    );
};


export default ListedBooks;