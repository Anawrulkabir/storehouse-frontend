import { Link } from 'react-router-dom'
import PriceTag from './priceTag/PriceTag'

const Hero = () => {
  return (
    <div className="mb-40">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 ">
        <div className="md:w-2/3 hover:border-2 rounded-lg hover:border-blue-600 relative">
          <img
            src="/banner-1.jpg"
            alt="Photo by Drew Beamer"
            className="rounded-md object-cover "
          />
          <PriceTag />
        </div>
        <div className="md:w-1/3 flex flex-col gap-4 md:p-2 relative">
          <div className="relative">
            <img
              src="/banner-2.jpg"
              alt="Photo by Drew Beamer"
              className="rounded-md object-cover  hover:border-2  hover:border-blue-600"
            />
            <PriceTag
              details={{ name: 'Apparel & Accessories', total: '30 Products' }}
            />
          </div>
          <div>
            <img
              src="/banner-3.webp"
              alt="Photo by Drew Beamer"
              className="rounded-md object-cover  hover:border-2  hover:border-blue-600"
            />
            <PriceTag
              details={{ name: 'Lifestyle & Gadgets', total: '20 Products' }}
            />
          </div>
        </div>
      </div>
      <Link to="/all" className="flex items-center justify-center mt-12">
        <button className="w-full text-xl font-medium rounded-full mx-8 px-3 md:px-5 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600  sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Explore Our Products
        </button>
      </Link>

      {/* caroessel */}
    </div>
  )
}

export default Hero
