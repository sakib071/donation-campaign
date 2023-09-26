import { useEffect, useState } from "react";
import swal from "sweetalert";
import DonationItems from "../../components/DonationItems/DonationItems";

const Donation = () => {

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
            <div>
                {noDataFound ? (
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

                        {donationToDisplay.length > 4 && <button onClick={() => setIsShow(!isShow)} className="mt-5 px-5 py-2 bg-black rounded-md text-white block mx-auto">
                            {isShow ? "See less" : "See more"}
                        </button>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Donation;