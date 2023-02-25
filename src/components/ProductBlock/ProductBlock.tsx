import { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IProducts } from '../../pages/Home'
import styles from './ProductBlock.module.scss'

interface IProductsProps {
  product: IProducts
}

const ProductBlock: FC<IProductsProps> = ({ product }) => {
  const { title, price, image, id } = product

  return (
    <div className={styles.productBlock}>
      <Link key={id} className={styles.Link} to={`/product/${id}`}>
        <img height={150} width={150} src={image} alt="product" />
        <div className={styles.productInfo}>
          <h3>{title}</h3>
          <strong>{price}$</strong>
        </div>
      </Link>
    </div>
  )
}

export default ProductBlock
