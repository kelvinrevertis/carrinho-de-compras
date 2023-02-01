import {ShoppingBagOpen } from 'phosphor-react';
import * as C from './styles'

interface Product {
    name: string,
    brand: string,
    description: string,
    price: number,
    photo: string
}

function formatPrice(price: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }

export function CardProduct(product: Product) {
    if (!product) return null;

    return (

        <C.ProductBoxCard>
            <img src={product.photo} title={product.name} />
            <div>
            <span>{product.name}</span>
            <span id='price'>{formatPrice(product.price)}</span>
            </div>
            <p>{product.description}</p>
            <button>
            <ShoppingBagOpen fontSize={18} />
            COMPRAR
            </button>
        </C.ProductBoxCard>

    )
}
