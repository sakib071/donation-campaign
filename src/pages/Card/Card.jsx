import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateCard from "./DonateCard";

const Card = () => {

    const [cardOne, setCardOne] = useState({});
    const { id } = useParams();
    const cards = useLoaderData();

    // console.log(cards);
    // console.log(id);

    useEffect(() => {
        const findCard = cards.find(card => card.id == id)
        setCardOne(findCard);
        // console.log(findCard);
    }, [id, cards])


    // console.log(cardOne);

    return (
        <div>
            <DonateCard cardOne={cardOne}></DonateCard>
        </div>
    );
};

export default Card;