import * as Dialog from '@radix-ui/react-dialog'
import * as C from './styles'

export function CartBar() {
    return (

        <C.CartBarContainer>
            <C.Header>Carrinho de compras</C.Header>

            <C.CloseButton>
            <Dialog.Close style={{backgroundColor: "black"}}>
                <p style={{color:"white"}}>X</p>
            </Dialog.Close>
            </C.CloseButton>

            <C.Footer>
                Finalizar Compra
            </C.Footer>


        </C.CartBarContainer>

    )
}