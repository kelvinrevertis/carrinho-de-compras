import * as C from './styles'
import { ShoppingCart} from "phosphor-react";

export function Header() {

    return (
        <C.HeaderContainer>
            <C.TitleContainer>MKS<span>Sistemas</span></C.TitleContainer>
            <C.ButtonCartContainer><ShoppingCart size={21}/> <span>0</span></C.ButtonCartContainer>
        </C.HeaderContainer>

    )

}