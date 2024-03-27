import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from './ReadBooks';
import Wishlist from './Wishlist';
import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { getItem } from '../../../utils/utility';

const BookArea2 = ({sortOrder}) => {
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

    return (
        <Tabs className={'my-8 md:w-[90%] mx-auto'}  defaultIndex={0}>
            <TabList className={'flex gap-8'}>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel >
                {/* <h2>my content</h2> */}
                <ReadBooks localOrder={localOrder} setLocalOrder={setLocalOrder} readBooks={readBooks} setreadBooks={setreadBooks}/>
            </TabPanel>
            <TabPanel>
                {/* <h2>this is my wishlist</h2> */}
                <Wishlist allBooks={allBooks} sortOrder={sortOrder}/>
            </TabPanel>
        </Tabs>
    );
};

BookArea2.propTypes = {
    sortOrder: propTypes.string,
}

export default BookArea2;