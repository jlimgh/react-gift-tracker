import { useSelector, useDispatch } from 'react-redux';
import { removeGift } from '../store';

function GiftList() {
    const dispatch = useDispatch();
    const { gifts, name } = useSelector(({form, gifts: { data, searchTerm}}) => {
        const filteredGifts = data.filter((gift) => gift.name.toLowerCase().includes(searchTerm.toLowerCase()))

        return {
            gifts: filteredGifts,
            name: form.name
        }

    });

    const handleGiftDelete = (gift) => {
        dispatch(removeGift(gift.id));
    }

    const renderedGifts = gifts.map((gift) => {
        const bold = name && gift.name.toLowerCase().includes(name.toLowerCase())
        return (
            <div key={gift.id} className={`panel ${bold && 'bold'}`}>
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