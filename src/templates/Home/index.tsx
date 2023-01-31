import { CardProduct } from "@/components/CardProduct"
import { Header } from "@/components/Header"
import { CardGridContainer, HomeContainer } from "./styles"

export const Home = ({ data }: any) => {
    return (

        <HomeContainer>
            <Header />
            <CardGridContainer>
                {data.products.map((product: any) => (
                    <CardProduct
                        key={product.id}
                        name={product.name}
                        brand={product.brand}
                        description={product.description}
                        price={product.price}
                        photo={product.photo}
                    />
                ))}
            </CardGridContainer>
        </HomeContainer>

    )
}