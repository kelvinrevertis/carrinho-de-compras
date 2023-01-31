import * as C from './styles'

interface Product {
    name: string,
    brand: string,
    description: string,
    price: number,
    photo: string
}

// export const formatPrice = (price)=>{

// }

export function CardProduct(product: Product) {
    if (!product) return null;

    return (

        <C.ProductBoxContainer>
            <h1>{product.name}</h1>
            <button>R${product.price}</button>
            <img src={product.photo} alt="" />
            <p>{product.description}</p>
        </C.ProductBoxContainer>

    )
}
