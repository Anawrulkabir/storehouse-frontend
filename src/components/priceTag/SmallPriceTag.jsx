/* eslint-disable react/prop-types */

const SmallPriceTag = ({
  details = { name: 'Storehouse Product', price: '12.50' },
}) => {
  return (
    <div className="border rounded-full px-2 py-1 flex items-center gap-2  justify-between border-blue-500 absolute bottom-0 -translate-y-2 translate-x-2">
      <p className="font-bold text-xs ">{details.name}</p>
      <div className="bg-blue-500 rounded-2xl px-3 py-1">
        <p className="text-white text-xs">${details.price}</p>
      </div>
    </div>
  )
}

export default SmallPriceTag
