import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const ArrivalCard = ({ newArrives }) => {
    // console.log(newArrives);
    const { author, bookName, image, category, tags, totalPages, publisher, yearOfPublishing, rating } = newArrives;
    return (
        <div className='w-full relative flex items-center justify-center'>
            <div className="flex p-6 w-[90%] space-y-6 gap-10 overflow-hidden rounded-lg shadow-md bg-gray-900 dark:bg-[#13131309] text-gray-100 dark:text-gray-800">
                <div className="flex flex-col justify-start gap-3 ">
                    <img src={image} alt="BookImages" className="object-cover w-80 h-64 mb-4 rounded-xl bg-gray-500 dark:bg-gray-500" />
                </div>
                <div className="space-y-3">
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-lg font-semibold">{bookName}</a>
                        <span className="text-sm text-gray-400 dark:text-gray-600">{author}</span>
                    </div>
                    <div className="flex gap-2">
                        {
                            tags.map((tag, idx) => <span className='text-red-500' key={idx}>#{tag}</span>)
                        }
                    </div>
                    <h4 className='block'>{category}</h4>
                    <div className="flex gap-4">
                        <h2 className="mb-1 text-sm font-normal inline">Pages: {totalPages}</h2>
                        <h2 className="mb-1 text-sm font-normal inline">Publisher: {publisher}</h2>
                    </div>
                    <div className='flex w-full justify-between items-center gap-6'>
                        <div className="year flex gap-3 justify-center items-center">
                            <SlCalender className='text-lg' />
                            <h2>Publishing Year: {yearOfPublishing}</h2>
                        </div>
                        <div className="rating flex gap-3 justify-center items-center">
                            <FaStar className='text-amber-400 text-xl' />
                            <h2>Rating: {rating}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 right-4 rotate-45 z-10 bg-red-400 p-4 tex-3xl rounded-full font-semibold text-white'>Coming</div>
        </div>
    );
};

ArrivalCard.propTypes = {
    newArrives: PropTypes.object.isRequired,
}

export default ArrivalCard;