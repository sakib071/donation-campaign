import { useEffect, useState } from "react";
import swal from "sweetalert";
import DonateCard from "../Card/DonateCard";
import DonationDetails from "../../components/DonationDetails/DonationDetails";

const Donation = () => {

    const [donationToDisplay, setDonationToDisplay] = useState([]);
    const [noDataFound, setNoDataFound] = useState(false);

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem("donation"));

        console.log("D length: ", donatedItems);

        if (donatedItems) {
            setDonationToDisplay(donatedItems)
        }
        else {
            setNoDataFound("No Data Found");
            swal("Sorry!", "Empty Cart", "error");
        }
    }, [])

    console.log("donation to diplay", donationToDisplay);

    return (
        <div>
            {
                noDataFound ? <p className="text-2xl font-semibold text-center flex h-[60vh] items-center justify-center">{noDataFound}</p> : <div>
                    <div className="grid grid-cols-1 m-10 lg:grid-cols-2 gap-10">
                        {
                            donationToDisplay.map(cardOne => <DonationDetails key={cardOne.id} cardOne={cardOne}></DonationDetails>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;