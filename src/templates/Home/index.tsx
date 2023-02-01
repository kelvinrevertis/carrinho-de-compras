import { CardProduct } from "@/components/CardProduct"
import { Container } from "@/components/CardProduct/styles"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { CardGridContainer } from "./styles"

export const Home = ({ data }: any) => {
    return (

        <>
            <Header />
            <Container>
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
            </Container>
            <Footer/>
        </>
    )
}