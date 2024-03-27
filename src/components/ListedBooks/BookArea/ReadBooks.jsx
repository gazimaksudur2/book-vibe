import { useEffect } from 'react';
import { removeItem } from '../../../utils/utility';
import ListedBookCard from './ListedBookCard';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const ReadBooks = ({ localOrder, readBooks, setreadBooks }) => {

    // console.log('read books ',readBooks );
    

    useEffect(()=>{
        if(localOrder==='') return;

        let bkarray = [];
        if(localOrder==='rating'){
            // console.log('book array is before sorting ', books);
            bkarray = readBooks.sort((a,b)=>{
                return (parseFloat(a.rating) < parseFloat(b.rating))
            });
        }else if(localOrder==='totalPages'){
            bkarray = readBooks.sort((a,b)=>{
                return (parseInt(a.totalPages)<parseInt(b.totalPages))
            });
        }else if(localOrder==='yearOfPublishing'){
            bkarray = readBooks.sort((a,b)=>{
                return (parseInt(a.yearOfPublishing)<parseInt(b.yearOfPublishing))
            });
        }

        setreadBooks([...bkarray]);
    },[localOrder]);

    const handleRemoveAllRead = (val)=>{
        const ret = removeItem('read',val);
        if(ret===val){
            toast.success('Successfully removed all the Read Items!!');
            setreadBooks([]);
            return;
        }
        toast.error('Cannot remove All items!!');
    }

    return (
        <div className='w-full flex flex-col justify-between items-center md:gap-8 py-10'>
            {
                readBooks.map((book)=><ListedBookCard key={book.bookId} book={book}/>)
            }
            <button onClick={()=>{handleRemoveAllRead('all')}} className={`btn btn-outline ${readBooks.length>0?'flex':'hidden'} btn-info`}>Delete All Read Books</button>
        </div>

    );
};

ReadBooks.propTypes = {
    localOrder: PropTypes.string,
    setreadBooks: PropTypes.func,
    readBooks: PropTypes.array,
}

export default ReadBooks;