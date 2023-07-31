import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {

    const {restData} = props;

    const {
        cloudinaryImageId,
        name, 
        avgRating,
        cuisines,
        costForTwo, 
        deliveryTime
    } = restData?.data
    return(
        <div className="res-data" style={{backgroundColor: '#f0f0f0', display: 'flex', flexDirection:'column', padding: '5px' , width: '20%', flexWrap: 'wrap'}}>
            <img src={CDN_URL + cloudinaryImageId} className="res-logo" alt="res-logo" width='100%' />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <p>{avgRating}</p>
            <p>{costForTwo /  100} For TWO</p>
            <p>{deliveryTime}</p>
        </div>
    )
}

export default RestaurantCard