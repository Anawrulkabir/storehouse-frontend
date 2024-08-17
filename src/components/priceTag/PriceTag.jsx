/* eslint-disable react/prop-types */

const PriceTag = ({
  details = { name: 'Storehouse Product', price: '12.50' },
}) => {
  return (
    <div className="border rounded-full px-3 py-2 flex items-center gap-3  justify-between border-blue-500 absolute bottom-0 -translate-y-5 translate-x-5">
      <p className="font-bold text-base ">{details.name}</p>
      <div className="bg-blue-500 rounded-2xl px-3 py-1">
        <p className="text-white">${details.price}</p>
      </div>
    </div>
  )
}

export default PriceTag
