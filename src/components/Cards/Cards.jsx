import DonationCard from "./DonationCard";

const Cards = ({ cards }) => {

    console.log(cards);

    return (
        <div className="py-10">
            <h3 className="text-3xl text-center font-semibold mb-10">All cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    cards?.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Cards;