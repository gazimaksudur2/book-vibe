import { useState } from 'react';
import BooksTop from './BooksTop/BooksTop';
import BookArea from './BookArea/BookArea';

const ListedBooks = () => {
    const [sortOrder, setSortOrder] = useState('');

    const handleSort = (sortorder)=>{
        setSortOrder(sortorder);
        // console.log(sortOrder);
    }
    return (
        <div>
            <BooksTop handleSort={handleSort}/>
            {/* <BookArea2 sortOrder={sortOrder}/> */}
            <BookArea sortOrder={sortOrder}/>
            {/* <BookArea /> */}
        </div>
    );
};


export default ListedBooks;