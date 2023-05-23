import { CLOUDINARY_IMAGE_ID } from "../constants"

const RestaurantCard = ({ name, avgRating, cloudinaryImageId, cuisines }) => {
  return (
    <div className="w-72 h-[340px] flex flex-col items-start gap-2 rounded-t-3xl border border-[#ebebeb] p-4 group hover:shadow-lg transition-all duration-500 delay-100 cursor-pointer">
      <img
        className="w-full object-contain rounded-b-3xl group-hover:scale-105 transition-all duration-500 delay-100"
        src={CLOUDINARY_IMAGE_ID + cloudinaryImageId}
        alt={`${name} image`}
      />

      <h2 className="font-bold text-lg">{name}</h2>
      <h3 className="text-sm font-medium">{cuisines.join(", ")}</h3>
      <span
        className={`text-xs text-white bg-[#48c479] px-2 py-1 ${
          Number(avgRating) < 4 && "bg-[#db7c38]"
        }`}
      >
        ⭐ {avgRating}
      </span>
    </div>
  )
}
export default RestaurantCard
