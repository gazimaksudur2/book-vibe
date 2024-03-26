import { useEffect, useState } from 'react';
import { getItem, removeItem } from '../../../utils/utility';
import ListedBookCard from './ListedBookCard';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const Wishlist = ({allBooks, sortOrder}) => {
    const [localOrder, setLocalOrder] = useState('');
    const [books, setBooks] = useState([]);
    const localbks = getItem('wishlist');
    useEffect(()=>{
        const bkarray = allBooks.filter((bk)=>localbks.includes(bk.bookId));
        setBooks(bkarray);
        // console.log('from local',allBooks);
        // console.log('from local',localbks);
        // console.log('from local',books);
        // console.log('from local',bkarray);
    },[]);

    useEffect(()=>{
        if(sortOrder!==''){
            setLocalOrder(sortOrder);
        }
    },[sortOrder]);

    useEffect(()=>{
        // console.log('before sorting ',books ,' & local order ',localOrder);
        if(localOrder==='') return;

        let bkarray = [];
        if(localOrder==='rating'){
            // console.log('book array is before sorting ', books);
            bkarray = books.sort((a,b)=>{
                return (parseFloat(a.rating) < parseFloat(b.rating))
            });
        }else if(localOrder==='totalPages'){
            bkarray = books.sort((a,b)=>{
                return (parseInt(a.totalPages)<parseInt(b.totalPages))
            });
        }else if(localOrder==='yearOfPublishing'){
            bkarray = books.sort((a,b)=>{
                return (parseInt(a.yearOfPublishing)<parseInt(b.yearOfPublishing))
            });
        }

        setBooks([...bkarray]);
    },[localOrder]);

    const handleRemoveAllWishlist = (val)=>{
        const ret = removeItem('wishlist',val);
        if(ret===val){
            toast.success('Successfully removed all the Read Items!!');
            setBooks([]);
            return;
        }
        toast.error('Cannot remove All items!!');
    }

    return (
        <div className='w-full flex flex-col justify-between items-center md:gap-8 py-10'>
            {
                books.map((book)=><ListedBookCard key={book.bookId} book={book}/>)
            }
            <button onClick={()=>{handleRemoveAllWishlist('all')}} className={`btn btn-outline ${books.length>0?'flex':'hidden'} btn-info`}>Delete All WishList Books</button>
        </div>
    );
};

Wishlist.propTypes = {
    allBooks: PropTypes.array.isRequired,
    sortOrder: PropTypes.string,
}

export default Wishlist;