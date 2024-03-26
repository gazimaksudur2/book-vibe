import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from './ReadBooks';
import Wishlist from './Wishlist';
import { useEffect, useState } from 'react';
import propTypes from 'prop-types';

const BookArea2 = ({sortOrder}) => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(()=>{
        fetch('/books.json')
        .then(res=>res.json())
        .then(data=>setAllBooks(data))
    },[]);
    return (
        <Tabs className={'my-8 md:w-[90%] mx-auto'}>
            <TabList className={'flex gap-8'}>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel>
                <ReadBooks allBooks={allBooks} sortOrder={sortOrder}/>
                {/* <h2>my content</h2> */}
            </TabPanel>
            <TabPanel>
                <Wishlist allBooks={allBooks} sortOrder={sortOrder}/>
            </TabPanel>
        </Tabs>
    );
};

BookArea2.propTypes = {
    sortOrder: propTypes.string,
}

export default BookArea2;