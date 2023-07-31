import RestaurantCard from './RestaurantCard'
import { useState } from 'react'
import restList from './utils/mockdata' 
 

const Body = () => {
const [listOfRestaurants, setListOfRestaurant] = useState(restList) ;
console.log('listOfRestaurants', listOfRestaurants)
    return (
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
                   <RestaurantCard key={restaurant.data.id} restData={restaurant} /> 
                  ))}
            </div>
        </div>
    )
}

export default Body