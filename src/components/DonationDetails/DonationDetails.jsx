import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';


const DonationDetails = ({ cardOne }) => {

    const { id, picture, title, price, text_button_bg_color, card_bg_color } = cardOne || {}

    const [donationToDisplay, setDonationToDisplay] = useState([]);
    const [noDataFound, setNoDataFound] = useState(false);
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem("donation"));


        if (donatedItems) {
            setDonationToDisplay(donatedItems)
        }
        else {
            setNoDataFound("No Data Found");
            swal("Sorry!", "Empty Cart", "error");
        }
    }, [])


    return (
        <div>
            <div className="flex justify-center items-center h[80vh]">
                <div className="flex w-full max-w-[20rem] md:max-w-[30rem] lg:max-w-[44rem] flex-row bg-white shadow-md rounded-xl" style={{ color: text_button_bg_color, backgroundColor: card_bg_color }}>
                    <div className=" m-0 lg:w-2/5 overflow-hidden rounded-xl">
                        <img className="h-full w-full object-cover" src={picture} alt="image" />
                    </div>

                    <div className="p-6">
                        <h6 className="mb-4 w-[7rem] rounded-md block text-base font-semibold uppercase text-center"
                            style={{ color: text_button_bg_color, backgroundColor: card_bg_color }}>

                        </h6>
                        <h4 className="mb-2 text-2xl font-semibold text-black">
                            {title}
                        </h4>
                        <p className="text-xl font-semibold">${price}</p>
                        <button
                            className="flex items-center gap-2 rounded-lg mt-5 py-2 px-3 lg:px-6 text-center align-middle text-xs lg:text-sm lg:font-bold uppercase transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-white"
                            type="button" style={{ backgroundColor: text_button_bg_color }}
                        >
                            View Details
                        </button>

                    </div>
                </div>
            </div>

            {/* ........................ */}


            <div>
                {/* {noDataFound ? (
                    <p className="h-[80vh] flex justify-center items-center">{noDataFound}</p>
                ) : (
                    <div>
                        <div className="grid grid-cols-2 gap-5">
                            {
                                isShow ? donationToDisplay.map((cardOne) => (
                                    <DonationItems key={cardOne.id} cardOne={cardOne}></DonationItems>
                                ))

                                    : donationToDisplay.slice(0, 4).map((cardOne) => (
                                        <DonationItems key={cardOne.id} cardOne={cardOne}></DonationItems>
                                    ))
                            }
                        </div>

                        {donationToDisplay.length > 4 && <button onClick={() => setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
                            {isShow ? "See less" : "See more"}
                        </button>}
                    </div>
                )} */}
            </div>


        </div>
    );
};


DonationDetails.propTypes = {
    cardOne: PropTypes.array.isRequired
}


export default DonationDetails;