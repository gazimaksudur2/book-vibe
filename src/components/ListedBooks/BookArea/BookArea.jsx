import 'react-tabs/style/react-tabs.css';
import ReadBooks from './ReadBooks';
import Wishlist from './Wishlist';
import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { getItem } from '../../../utils/utility';

const BookArea = ({sortOrder}) => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(()=>{
        fetch('/books.json')
        .then(res=>res.json())
        .then(data=>setAllBooks(data))
    },[]);


    const [localOrder, setLocalOrder] = useState('');
    const [readBooks, setreadBooks] = useState([]);

    useEffect(()=>{
        const localbks = getItem('read');
        const bkarray = allBooks.filter((bk)=>localbks.includes(bk.bookId));
        setreadBooks(bkarray);
        // console.log(localbks, " and ", readBooks, " and ", allBooks);
    },[allBooks]);

    useEffect(()=>{
        if(sortOrder!==''){
            setLocalOrder(sortOrder);
        }
    },[sortOrder]);

    const handleChecked = (e) => {
        // console.log(e.target);
        // console.log(e.target.id);
        // if(e.target.checked){
        //     e.target.className = 'tab text-lg font-medium p-2';
        // }
        const read = document.getElementById('read');
        const wishlist = document.getElementById('wishlist');
        if(e.target.id==='read'){
            read.classList.remove('text-sm', 'font-normal', 'p-2');
            read.classList.add('text-lg', 'font-medium', 'p-6');
            wishlist.classList.add('text-sm', 'font-normal', 'p-2');
            wishlist.classList.remove('text-lg', 'font-medium', 'p-6');
        }else if(e.target.id==='wishlist'){
            wishlist.classList.remove('text-sm', 'font-normal', 'p-2');
            wishlist.classList.add('text-lg', 'font-medium', 'p-6');
            read.classList.add('text-sm', 'font-normal', 'p-2');
            read.classList.remove('text-lg', 'font-medium', 'p-6');
        }
        // console.log(element.classList);
    }

    return (
        <div className='my-8 w-[95%] mx-auto'>
            <div role="tablist" className="tabs tabs-lifted w-full mx-auto min-w-[90%]">
                <input id='read' type="radio" name="my_tabs_2" role="tab" onClick={handleChecked} className={`tab w-[80%] text-lg font-medium p-2`} aria-label="Read" defaultChecked />
                <div role="tabpanel" className="tab-content md:w-full bg-base-100 border-base-300 rounded-box px-3 md:px-10 py-4">
                    <ReadBooks localOrder={localOrder} setLocalOrder={setLocalOrder} readBooks={readBooks} setreadBooks={setreadBooks}/>
                </div>

                <input id='wishlist' type="radio" name="my_tabs_2" role="tab" onClick={handleChecked} className={`tab w-[80%] text-sm font-normal p-2`} aria-label="Wishlist" />
                <div role="tabpanel" className="tab-content md:w-full bg-base-100 border-base-300 rounded-box px-3 md:px-10 py-4">
                    <Wishlist allBooks={allBooks} sortOrder={sortOrder}/>
                    {/* <h2>hello everyone</h2> */}
                </div>
            </div>
        </div>
    );
};

BookArea.propTypes = {
    sortOrder: propTypes.string,
}

export default BookArea;