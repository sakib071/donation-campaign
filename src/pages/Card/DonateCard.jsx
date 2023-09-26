import PropTypes from 'prop-types';

const DonateCard = ({ cardOne }) => {

    const { id, picture, title, category, price, text_button_bg_color, card_bg_color } = cardOne || {}

    const addedDonationArray = [];
    console.log("image show: ", id);
    const handleAddDonation = () => {
        // console.log(cardOne);
        const donatedItems = JSON.parse(localStorage.getItem("donation"));
        if (!donatedItems) {
            addedDonationArray.push(cardOne);
            localStorage.setItem("donation", JSON.stringify(addedDonationArray));
        }
        else {
            addedDonationArray.push(...donatedItems, cardOne);
            localStorage.setItem("donation", JSON.stringify(addedDonationArray));
        }
    }

    return (
        <div className="flex justify-center items-center h[80vh]">
            <div className="flex w-full max-w-[44rem] flex-row bg-white shadow-md rounded-xl" style={{ color: text_button_bg_color, backgroundColor: card_bg_color }}>
                <div className=" m-0 w-2/5 overflow-hidden rounded-xl">
                    <img className="h-full w-full object-cover" src={picture} alt="image" />
                </div>

                <div className="p-6">
                    <h6 className="mb-4 w-[7rem] rounded-md block text-base font-semibold uppercase text-center"
                        style={{ color: text_button_bg_color, backgroundColor: card_bg_color }}>
                        {category}
                    </h6>
                    <h4 className="mb-2 text-2xl font-semibold text-black">
                        {title}
                    </h4>
                    <p className="text-xl font-semibold">${price}</p>
                    <a className="inline-block" href="#">
                        <button
                            onClick={handleAddDonation}
                            className="flex items-center gap-2 rounded-lg mt-5 py-2 px-6 text-center align-middle text-sm font-bold uppercase transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-white"
                            type="button" style={{ backgroundColor: text_button_bg_color }}
                        >
                            View Details
                        </button>
                    </a>
                </div>
            </div>
        </div>

    );
};

DonateCard.propTypes = {
    cardOne: PropTypes.array.isRequired
}


export default DonateCard;