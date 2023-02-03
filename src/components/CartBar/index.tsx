import * as Dialog from '@radix-ui/react-dialog'
import * as C from './styles'

export function CartBar() {
    return (

        <C.CartBarContainer>
            <div>Carrinho de compras</div>
            <Dialog.Close>
                <C.CloseButton><p>X</p></C.CloseButton>
            </Dialog.Close>

        </C.CartBarContainer>

    )
}