/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

import SmallPriceTag from '../priceTag/SmallPriceTag'
import { PaginationDemo } from '../pagination/PaginationDemo'
import { Skeleton } from '@/components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../../api/productApi'
import useAxiosCommon from '../../hooks/useAxiosCommon'
import { useEffect, useState } from 'react'

export function AllProducts() {
  const skeleton = Array.from({ length: 9 })
  const { search } = useLocation()
  const axiosCommon = useAxiosCommon()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const {
    data: response = {},
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['products', search, currentPage],
    queryFn: async () => {
      const params = new URLSearchParams(search)
      params.set('page', currentPage)
      params.set('limit', itemsPerPage)
      const { data } = await axiosCommon.get(`/all?${params.toString()}`)
      return data
    },
  })

  // Destructure the response to get the products and pagination info
  const {
    products = [],
    totalProducts,
    currentPage: serverPage,
    totalPages,
  } = response

  useEffect(() => {
    const params = new URLSearchParams(search)
    setQuery(params.get('search') || '')
  }, [search])

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams(search)
    params.set('search', query)
    navigate(`?${params.toString()}`)
    setCurrentPage(1) // Reset to page 1 on new search
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    const params = new URLSearchParams(search)
    params.set('page', newPage)
    navigate(`?${params.toString()}`)
  }

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

  // console.log(products)
  return (
    <div className="flex min-h-screen justify-between">
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

      <div className="bg-zinc-100 flex flex-col items-center  w-full ">
        <h1 className="text-center mt-12 mb-8 text-3xl font-bold">
          Explore Our Products
        </h1>
        <div className="mb-8 rounded-3xl">
          {/* <label className="input border border-black shadow-lg flex items-center gap-2 w-96 md:min-w-[40rem]"> */}
          <form
            onSubmit={handleSearch}
            className="input  flex items-center   md:min-w-[20rem] rounded-3xl "
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="grow py-2 px-4 w-full border rounded-l-3xl"
              placeholder="Search"
            />
            <button
              type="submit"
              className="border py-2 px-3 rounded-r-3xl bg-green-500 text-white font-normal "
            >
              Search
            </button>
          </form>
          {/* </label> */}
        </div>
        <div className="">
          {isLoading ? (
            <div className="grid grid-cols-3 gap-3 p-4">
              {skeleton.map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-[165px] w-[265px] rounded-xl"
                />
              ))}
            </div>
          ) : totalProducts > 0 ? (
            <div className="grid grid-cols-3 gap-3  p-4">
              {products.map((item, index) => (
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
          ) : (
            <div className="flex items-center justify-center ">
              <p className="text-center font-bold text-4xl text-gray-300">
                No Products Found
              </p>
            </div>
          )}
        </div>
        {/* Pagination feture here  */}
        {totalProducts > 0 && (
          <PaginationDemo
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalItems={products.total} // Assuming the server sends the total count
            itemsPerPage={itemsPerPage}
          />
        )}
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
