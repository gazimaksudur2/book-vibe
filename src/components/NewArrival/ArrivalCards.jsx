import PropTypes from 'prop-types';
import ArrivalCard from './ArrivalCard';

const ArrivalCards = ({newArrivals}) => {
    console.log(newArrivals);
    return (
        <div className='md:w-[95%] mx-auto grid md:grid-cols-2 gap-8 content-around'>
            {/* <h2>hello world</h2> */}
            {
                newArrivals.map((newArrives,idx)=>(<ArrivalCard key={idx} newArrives={newArrives}></ArrivalCard>))
            }
        </div>
    );
};

ArrivalCards.propTypes = {
    newArrivals: PropTypes.array.isRequired,
}

export default ArrivalCards;