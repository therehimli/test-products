import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IProducts } from '../Home'
import black from '../../../public/black2.png'
import white from '../../../public/white.png'
import green from '../../../public/green-circle-emoji.png'
import styles from './Product.module.scss'

const ProductPage = () => {
  const [product, setProduct] = useState<IProducts>()
  const [color, setColor] = useState<string>('')
  const [size, setSize] = useState<string>('')
  const colors = [black, green, white]
  const sizes = ['XL', 'XXL', 'M', 'L']

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          'https://fakestoreapi.com/products/' + id
        )
        setProduct(data)
      } catch (error) {
        alert('Ошибка при получении продуктов!')
        navigate('/')
      }
    }

    fetchProduct()
  }, [])

  const colorHandler = (i: number) => {
    setColor(colors[i])
  }

  const sizeHandler = (i: number) => {
    setSize(sizes[i])
  }

  if (!product) {
    return <>Загрузка...</>
  }

  return (
    <div className={styles.Product}>
      <section>
        <img width={300} height={300} src={product.image} alt="product" />
        <h3>{product.title}</h3>
        <div className={styles.Info}>
          <div className={styles.colors}>
            {colors.map((item, i) => (
              <div
                style={{ border: item === color ? '2px solid black' : '' }}
                onClick={() => colorHandler(i)}
                className={styles.color}
              >
                <img width={30} height={30} src={item} alt="color" />
              </div>
            ))}
          </div>
          <div className={styles.sizes}>
            {sizes.map((item, i) => (
              <p
                style={{ border: item === size ? '2px solid black' : '' }}
                onClick={() => sizeHandler(i)}
                className={styles.size}
              >
                {item}
              </p>
            ))}
          </div>
          <strong className={styles.price}>{product.price}$</strong>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
