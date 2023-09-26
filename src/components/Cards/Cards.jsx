import PropTypes from 'prop-types';
import DonationCard from "./DonationCard";


const Cards = ({ cards }) => {

    return (

        <div>
            <div>
                <figure className="opacity-20">
                    <img className="w-full lg:h-[70vh] object-cover" src="/public/images/banner.jpeg" alt="" />
                </figure>
                <div className="absolute bottom-80 lg:bottom-96 left-1/2 flex flex-col text-center -translate-x-2/4  rounded-md">
                    <p className="text-2xl lg:text-5xl font-bold m-5 lg:m-10">I Grow By Helping People In Need</p>
                    <div className="flex mx-auto">
                        <input type="text" placeholder="Search here" className="input lg:w-[calc(30rem)] px-5 max-w-xs rounded-l-md shadow-lg" />
                        <button className="bg-[#FF444A] text-white py-2 lg:py-3 px-4 rounded-r-md">Search</button>
                    </div>
                </div>

            </div>
            <div className="py-10">
                <h3 className="text-3xl text-center font-semibold mb-10">All cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        cards?.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                    }
                </div>
            </div>
        </div>
    );
};
Cards.propTypes = {
    cards: PropTypes.array.isRequired,
}

export default Cards;