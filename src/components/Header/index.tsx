import * as Dialog from '@radix-ui/react-dialog';
import * as C from './styles';
import { ShoppingCart } from 'phosphor-react';
import { CartBar } from '../CartBar';

export function Header() {
    return (
        <C.HeaderContainer>
            <C.TitleContainer>
                MKS<span>Sistemas</span>
            </C.TitleContainer>
            <Dialog.Root>
                <Dialog.Trigger style={{ borderRadius: '8px', borderColor: 'white' }}>
                    <C.ButtonCartContainer>
                        <ShoppingCart size={21} />
                        <span>0</span>
                    </C.ButtonCartContainer>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <CartBar />
                </Dialog.Portal>
            </Dialog.Root>

        </C.HeaderContainer>
    );
}



