import { useSelector, useDispatch } from 'react-redux';
import { removeGift } from '../store';

function GiftList() {
    const dispatch = useDispatch();
    const gifts = useSelector((state) => {
        return state.gifts.data;
    });

    const handleGiftDelete = (gift) => {
        dispatch(removeGift(gift.id));
    }

    const renderedGifts = gifts.map((gift) => {
        return (
            <div key={gift.id} className="panel">
                <p>
                    {gift.name} - ${gift.cost}
                </p>
                <button 
                    className="button is-danger"
                    onClick={() => handleGiftDelete(gift)}>
                    Delete
                </button>
            </div>
        );
    })


    return <div className="gift-list">
        {renderedGifts}
        <hr />
    </div>;
}

export default GiftList;