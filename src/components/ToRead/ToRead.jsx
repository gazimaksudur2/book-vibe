import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getItem } from '../../utils/utility';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const getPath = (x, y, width, height) => {
    return (`M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
${x + width / 2}, ${y}
C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
Z`);
};


const TriangleBar = (book) => {
    const { fill, x, y, width, height } = book;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const ToRead = () => {

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const lcID = getItem('read');

    const [books, setBooks] = useState([]);
    const allBooks = useLoaderData();

    useEffect(()=>{
        const lcBooks = allBooks.filter((book)=>lcID.includes(book.bookId));
        setBooks(lcBooks);
    },[allBooks]);


    // console.log(lcID, ' and ', books);




    return (
        <div className='w-full min-h-full flex justify-center items-end'>
            <BarChart className='' width={1200} height={700} data={books} margin={{ top: 10, right: 100, left: 20, bottom: 100 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis className='text-lg text-[#131313] font-semibold font-workSans' dataKey="bookName" />
                <YAxis/>
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {books.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default ToRead;