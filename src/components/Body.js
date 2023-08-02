import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import restList from './utils/mockdata' 
import Shimmer from './Shimmer'
 

const Body = () => {
const [listOfRestaurants, setListOfRestaurant] = useState([]) ;

useEffect(()=>{
    fetchData();
}, [])

const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true' 
    )
    const json = await data.json();
    
    setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log('json', json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
 
 
    return  listOfRestaurants.length === 0 ? (<Shimmer />) : ( 
        
        <div className="body">
            {/* <div className="search">Search</div> */}
            <button className="filter-btn" style={{padding: '5px'}}
            onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4 )
              setListOfRestaurant(filteredList)
            }}
            >  Top Rated Restaurant
            </button>

            <div className="res-container" style={{display: 'flex', flexWrap: 'wrap',  margin: '0 10px', gap: '15px'}}>
            {/* <RestaurantCard restData={restList[0]} /> working */}
                {listOfRestaurants.map((restaurant) => (  
                   <RestaurantCard key={restaurant?.info?.id} resList={restaurant} /> 
                  ))}
            </div>
        </div>
    )
}

export default Body