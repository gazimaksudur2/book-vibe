import Banner from "./Banner";
import Books from "./Books";
// import { useLoaderData } from 'react-router-dom'
// import PropTypes from 'prop-types'

const Home = () => {
    // const books = useLoaderData();
    // console.log(books);
    return (
        <div className="space-y-16">
            <Banner/>
            <Books />
        </div>
    );
};

// Home.propTypes = {
//     books: PropTypes.array,
// }
export default Home;