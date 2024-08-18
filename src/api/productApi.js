import useAxiosCommon from '../hooks/useAxiosCommon'

// Fetch products with optional filters and sorting
export const fetchProducts = async ({ queryKey }) => {
  const [_key, filters] = queryKey

  const {
    categoryName,
    subcategoryName,
    brandName,
    minPrice,
    maxPrice,
    startDate,
    endDate,
    relevance,
    search,
    sortBy,
  } = filters

  const params = {
    categoryName,
    subcategoryName,
    brandName,
    minPrice,
    maxPrice,
    startDate,
    endDate,
    relevance,
    search,
    sortBy,
  }

  const { data } = await useAxiosCommon.get('/products', { params })
  return data
}
