/* eslint-disable react/prop-types */

const DonateCard = ({ cardOne }) => {

    const { id, picture, title, category, text_button_bg_color, card_bg_color } = cardOne || {}

    console.log("image show: ", id);


    return (
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img src={picture} alt="image" />
            </div>

            <div className="p-6">
                <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {category}
                </h6>
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h4>
                <a className="inline-block" href="#">
                    <button
                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Add Donation
                    </button>
                </a>
            </div>
        </div>
    );
};

export default DonateCard;