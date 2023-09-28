import { useSelector } from "react-redux";



function GiftValue() {
    const totalCost = useSelector(({gifts: {data, searchTerm}}) => {
        return data
            .filter((gift) =>
                gift.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .reduce((acc, gift) => acc + gift.cost, 0)
        
    })
    return <div className="car-value">
        Total Value: ${totalCost}
    </div>;
}

export default GiftValue;