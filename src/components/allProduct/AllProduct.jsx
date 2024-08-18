/* eslint-disable react/prop-types */
import { Link, useLocation, useParams } from 'react-router-dom'

import SmallPriceTag from '../priceTag/SmallPriceTag'
import { PaginationDemo } from '../pagination/PaginationDemo'
import { Skeleton } from '@/components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../../api/productApi'
import useAxiosCommon from '../../hooks/useAxiosCommon'

export function AllProducts() {
  const skeleton = Array.from({ length: 9 })
  const { search } = useLocation()
  // console.log(search)
  // const params = new URLSearchParams(search)
  // const categoryName = params.get('categoryName')
  // const subcategoryName = params.get('subcategoryName')
  // const brandName = params.get('brandName')
  // const minPrice = params.get('minPrice')
  // const maxPrice = params.get('maxPrice')
  // const startDate = params.get('startDate')
  // const endDate = params.get('endDate')
  // const relevance = params.get('relevance')
  // const searchQuery = params.get('search')
  // const sortBy = params.get('sortBy')
  //
  // const filters = {
  //   categoryName,
  //   subcategoryName,
  //   brandName,
  //   minPrice,
  //   maxPrice,
  //   startDate,
  //   endDate,
  //   relevance,
  //   search,
  //   sortBy,
  //   searchQuery,
  // }

  // console.log(filters)

  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ['products', filters],
  //   queryFn: async () => await fetchProducts(filters),
  // })

  const axiosCommon = useAxiosCommon()
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['products', search],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/all${search}`)
      return data
    },
  })

  const links = [
    'Bags',
    'Drinkware',
    'Electronics',
    'Footware',
    'Headwear',
    'Hoodies',
    'Jackets',
    'Kids',
    'Pets',
    'Shirts',
    'Stickers',
  ]

  console.log(products)
  return (
    <div className="flex min-h-screen ">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))]  flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 border-r ">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-2xl text-gray-500 ">Collections</h1>
        </div>
        <div className="mx-auto grid w-full  items-start gap-6 ">
          <nav className="grid gap-4 text-sm text-muted-foreground sticky">
            <Link to="/all" className=" focus:text-black focus:font-medium">
              All
            </Link>
            {links.map((link, index) => (
              <Link
                key={index}
                to={`/all?subcategoryName=${link}`}
                className="focus:text-black focus:font-medium "
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
      </main>

      <div className="bg-zinc-100">
        <h1 className="text-center mt-12 mb-8 text-3xl font-bold">
          Explore Our Products
        </h1>
        <div className="grid grid-cols-3 gap-3  p-4">
          {isLoading
            ? skeleton.map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-[165px] w-[265px] rounded-xl"
                />
              ))
            : products?.map((item, index) => (
                <div key={index} className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="Photo by Drew Beamer"
                    className="rounded-md object-cover hover:border-2 hover:border-blue-600"
                  />
                  <SmallPriceTag
                    details={{
                      name: item.brandName,
                      price: item.price,
                    }}
                  />
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
            <Link
              to="/all?relevance=7"
              className=" focus:text-black focus:font-medium"
            >
              Relevance
            </Link>
            <Link
              to="/all?relevance=8"
              className=" focus:text-black focus:font-medium"
            >
              Trending
            </Link>
            <Link
              to="/all?relevance=9"
              className=" focus:text-black focus:font-medium"
            >
              Latest arrivals
            </Link>
            <Link
              to={'/all?sortBy=priceLowToHigh'}
              className=" focus:text-black focus:font-medium"
            >
              Price: Low to high
            </Link>
            <Link
              to={'/all?sortBy=priceHighToLow'}
              className=" focus:text-black focus:font-medium"
            >
              Price: High to low
            </Link>
          </nav>
        </div>
      </main>
    </div>
  )
}
