import PriceTag from './priceTag/PriceTag'

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-4 p-4">
        <div className="w-2/3 hover:border-2 rounded-lg hover:border-blue-600 relative">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="rounded-md object-cover "
          />
          <PriceTag />
        </div>
        <div className="w-1/3 flex flex-col gap-4 p-2 relative">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              className="rounded-md object-cover  hover:border-2  hover:border-blue-600"
            />
            <PriceTag />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              className="rounded-md object-cover  hover:border-2  hover:border-blue-600"
            />
            <PriceTag />
          </div>
        </div>
      </div>

      {/* caroessel */}
    </>
  )
}

export default Hero
