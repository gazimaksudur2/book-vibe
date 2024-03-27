import ArrivalBanner from "./ArrivalBanner";
import ArrivalCards from "./ArrivalCards";
import ArrivalTitle from "./ArrivalTitle";
import { useLoaderData } from 'react-router-dom'


const NewArrival = () => {
    const newArrivals = useLoaderData();
    // console.log(newArrivals);
    return (
        <div className="flex flex-col space-y-16 justify-center">
            <ArrivalBanner/>
            <ArrivalTitle />
            <ArrivalCards newArrivals={newArrivals}/>
        </div>
    );
};

export default NewArrival;