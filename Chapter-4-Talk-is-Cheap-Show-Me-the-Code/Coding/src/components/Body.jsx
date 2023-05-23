import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { restaurantData } from "../constants"

const filterRestaurant = (searchText, restaurant) => {
  const filteredData = restaurant.filter((res) =>
    res.data.name.toLowerCase().includes(searchText)
  )

  return filteredData
}

const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [restaurant, setRestaurant] = useState(restaurantData)
  const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantData)

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          const data = filterRestaurant(searchText, restaurant)
          setRestaurant(data)
          setSearchText("")
        }}
        className="flex justify-center max-w-[600px] mx-auto"
      >
        <input
          className="w-full mx-2 pl-4"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-5 py-3 rounded-xl hover:bg-orange-400 transition-all duration-300"
        >
          Search
        </button>
      </form>
      <div className="flex flex-wrap justify-center items-center mt-14 gap-10">
        {restaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data} />
        ))}
      </div>
    </main>
  )
}

export default Body
