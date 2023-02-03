import * as Dialog from '@radix-ui/react-dialog'
import * as C from './styles'
import { ShoppingCart } from "phosphor-react";
import { useState } from 'react';
import { CartBar } from '../CartBar';

export function Header() {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleButtonClick = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <C.HeaderContainer>
            <C.TitleContainer>MKS<span>Sistemas</span></C.TitleContainer>
            <C.ButtonCartContainer onClick={handleButtonClick}>
                <ShoppingCart size={21} />
                <span>0</span>
            </C.ButtonCartContainer>
            {showSidebar && (
                <Dialog.Portal>
                    <h1>HELLOW</h1>
                    {/* <CartBar>

                    </CartBar> */}
                </Dialog.Portal>


            )}
        </C.HeaderContainer>
    )
}