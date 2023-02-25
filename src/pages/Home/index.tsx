import { FC, useEffect, useState } from 'react'
import ProductBlock from '../../components/ProductBlock/ProductBlock'
import styles from './Home.module.scss'

interface IRating {
  rate: number
  count: number
}

export interface IProducts {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: IRating
}

const Home: FC = () => {
  const [products, setProducts] = useState<IProducts[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])
  console.log(products)

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className={styles.Products}>
          {products?.map((product) => (
            <ProductBlock product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
