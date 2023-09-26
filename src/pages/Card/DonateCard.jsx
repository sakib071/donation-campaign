import PropTypes from 'prop-types';
import swal from 'sweetalert';

const DonateCard = ({ cardOne }) => {

    const { id, picture, title, price, description, benefits, text_button_bg_color } = cardOne || {}

    const addedDonationArray = [];
    console.log("image show: ", id);
    const handleAddDonation = () => {

        const donatedItems = JSON.parse(localStorage.getItem("donation"));


        if (!donatedItems) {
            addedDonationArray.push(cardOne);
            localStorage.setItem("donation", JSON.stringify(addedDonationArray));
            swal("Good job!", "Donation added successfully!", "success");
        }
        else {
            const isExists = donatedItems.find(cardOne => cardOne.id == id)
            if (!isExists) {
                addedDonationArray.push(...donatedItems, cardOne);
                localStorage.setItem("donation", JSON.stringify(addedDonationArray));
                swal("Good job!", "Donation added successfully!", "success");
            }
            else {
                swal("Alert!", "Already added", "warning");
            }
        }
    }

    return (
        <div>
            <div>
                <img className='w-full h-[70vh] object-cover z-10' src={picture} alt="" />
            </div>
            <div className='relative'>
                <div className='absolute z-20 w-full mt-[-100px] h-[100px] opacity-50 bg-black'></div>
                <button style={{ backgroundColor: text_button_bg_color }} onClick={handleAddDonation} className='absolute z-30 ml-10 mt-[-70px] bg-red-500 text-white px-6 py-2 rounded-md font-semibold'> <span>Donate ${price}</span> </button>
            </div>
            <h3 className='text-3xl font-bold mt-5'>{title}</h3>
            <p className='text-md mt-2 mb-5'>{description} </p>

            <div>
                <h3 className='text-xl font-bold'>Here are some of the benefits of a good education:</h3>
                <ul className='list-disc list-inside ml-4'>
                    {
                        benefits?.map(benefit => <li key={benefit.id}>{benefit}</li>)
                    }
                </ul>
            </div>

        </div >

    );
};

DonateCard.propTypes = {
    cardOne: PropTypes.array.isRequired
}


export default DonateCard;