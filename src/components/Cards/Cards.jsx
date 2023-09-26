import PropTypes from 'prop-types';
import DonationCard from "./DonationCard";
import { useEffect, useState } from 'react';


const Cards = ({ cards }) => {

    const [output, setOutput] = useState("");

    const handleOutPut = (e) => {
        e.preventDefault();
        setOutput(e.target.searchBar.value);
    }
    const [myCard, setMyCard] = useState(cards);
    useEffect(() => {
        if (output.length > 0) {
            const saveArray = [];
            const saved = cards.filter(card => card.category == output)
            saveArray.push(saved);
            setMyCard(saved);
        }
    }, [cards, output]);

    return (

        <div>
            <div>
                <figure className="opacity-20">
                    <img className="w-full lg:h-[70vh] object-cover" src="/public/images/banner.jpeg" alt="" />
                </figure>
                <div className="absolute bottom-80 lg:bottom-96 left-1/2 flex flex-col text-center -translate-x-2/4  rounded-md">
                    <p className="text-2xl lg:text-5xl font-bold m-5 lg:m-10">I Grow By Helping People In Need</p>

                    <form className="flex mx-auto" onSubmit={handleOutPut} >
                        <input type="text" name='searchBar' placeholder="Search here" className="input lg:w-[calc(30rem)] px-5 max-w-xs rounded-l-md shadow-lg" />
                        <input type="submit" value="Search" className="bg-[#FF444A] text-white py-2 lg:py-3 px-4 rounded-r-md" />
                    </form>
                </div>
            </div>
            <div className="py-10 mx-auto">
                <h3 className="text-3xl text-center font-semibold mb-10">All cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
                    {
                        myCard?.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
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