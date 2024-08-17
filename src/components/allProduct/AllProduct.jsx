import { Link } from 'react-router-dom'

import SmallPriceTag from '../priceTag/SmallPriceTag'
import { PaginationDemo } from '../pagination/PaginationDemo'

export function AllProducts() {
  const elements = Array.from({ length: 50 })
  return (
    <div className="flex min-h-screen ">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))]  flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 border-r ">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-2xl text-gray-500 ">Collections</h1>
        </div>
        <div className="mx-auto grid w-full  items-start gap-6 ">
          <nav className="grid gap-4 text-sm text-muted-foreground sticky">
            <Link href="#" className="font-semibold text-primary">
              All
            </Link>

            <Link href="#">Bags</Link>
            <Link href="#">Drinkware</Link>
            <Link href="#">Electronics</Link>
            <Link href="#">Footware</Link>
            <Link href="#">Headwear</Link>
            <Link href="#">Hoodies</Link>
            <Link href="#">Headwear</Link>
            <Link href="#">Jackets</Link>
            <Link href="#">Kids</Link>
            <Link href="#">Pets</Link>
            <Link href="#">Shirts</Link>
            <Link href="#">Stickers</Link>
          </nav>
        </div>
      </main>

      <div className="bg-zinc-100">
        <h1 className="text-center mt-12 mb-8 text-3xl font-bold">
          Explore Our Products
        </h1>
        <div className="grid grid-cols-3 gap-3  p-4">
          {elements.map((_, index) => (
            <div key={index} className="relative">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Photo by Drew Beamer"
                className="rounded-md object-cover hover:border-2 hover:border-blue-600"
              />
              <SmallPriceTag />
            </div>
          ))}
        </div>
        {/* Pagination feture here  */}
        <PaginationDemo />
      </div>

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))]    flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 border-r">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-2xl text-gray-500 "> Sort by</h1>
        </div>
        <div className="mx-auto grid w-full  items-start gap-6 md:grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground sticky ">
            <Link href="#">Relevance</Link>
            <Link href="#">Trending</Link>
            <Link href="#">Latest arrivals</Link>
            <Link href="#">Price: Low to high</Link>
            <Link href="#">Price: High to low</Link>
          </nav>
        </div>
      </main>
    </div>
  )
}
