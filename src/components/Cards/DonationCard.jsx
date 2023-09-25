import { Link } from "react-router-dom";

const DonationCard = ({ card }) => {

    const { picture, title, category, text_button_bg_color, card_bg_color } = card || {}

    return (
        <Link className="hover:w-full transition ease-in-out">
            <div className="card card-compact shadow-xl flex flex-col mx-auto max-w-[22rem] rounded-xl hover:scale-105" style={{ backgroundColor: card_bg_color }}>
                <figure><img className="w-full" src={picture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title w-[80px] py-1 px-2 text-center rounded-md mt-5 mx-5" style={{ color: text_button_bg_color, backgroundColor: card_bg_color }}>{category}</h2>
                    <h3 className="text-2xl font-bold mx-5 my-3 mb-5" style={{ color: text_button_bg_color }}>{title}</h3>
                </div>
            </div>
        </Link>

    );
};

export default DonationCard;