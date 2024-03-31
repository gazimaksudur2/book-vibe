import { useEffect, useState } from 'react';
import { getItem, removeItem } from '../../../utils/utility';
import ListedBookCard from './ListedBookCard';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const Wishlist = ({allBooks, sortOrder}) => {
    const myStatus = "wishlist";
    const [localOrder, setLocalOrder] = useState('');
    const [wishBooks, setwishBooks] = useState([]);
    useEffect(()=>{
        const localbks = getItem('wishlist');
        const bkarray = allBooks.filter((bk)=>localbks.includes(bk.bookId));
        setwishBooks(bkarray);
    },[allBooks]);

    useEffect(()=>{
        if(sortOrder!==''){
            setLocalOrder(sortOrder);
        }
    },[sortOrder]);

    useEffect(()=>{
        // console.log('local order ',localOrder);
        if(localOrder==='') return;

        let bkarray = [];
        if(localOrder==='rating'){
            // console.log('book array is before sorting ', books);
            bkarray = wishBooks.sort((a,b)=>{
                return (parseFloat(b.rating) - parseFloat(a.rating))
            });
        }else if(localOrder==='totalPages'){
            bkarray = wishBooks.sort((a,b)=>{
                return (parseInt(b.totalPages) - parseInt(a.totalPages))
            });
        }else if(localOrder==='yearOfPublishing'){
            bkarray = wishBooks.sort((a,b)=>{
                return (parseInt(b.yearOfPublishing) - parseInt(a.yearOfPublishing))
            });
        }
        setwishBooks([...bkarray]);
        // console.log(bkarray);
    },[localOrder]);

    const handleRemoveAllWishlist = (val)=>{
        const ret = removeItem('wishlist',val);
        if(ret===val){
            toast.success('Successfully removed all the Read Items!!');
            setwishBooks([]);
            return;
        }
        toast.error('Cannot remove All items!!');
    }
    // console.log(wishBooks);
    // console.log(allBooks);

    return (
        <div className='w-full flex flex-col justify-between items-center space-y-8 md:space-y-4 md:gap-8 py-10'>
            {
                wishBooks.map((book)=><ListedBookCard key={book.bookId} book={book} myStatus={myStatus}/>)
            }
            <button onClick={()=>{handleRemoveAllWishlist('all')}} className={`btn btn-outline ${wishBooks.length>0?'flex':'hidden'} btn-info`}>Delete All WishList Books</button>
        </div>
    );
};

Wishlist.propTypes = {
    allBooks: PropTypes.array.isRequired,
    sortOrder: PropTypes.string,
}

export default Wishlist;