import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import logoImgWithText from "../../assets/ignite-with-text-logo.svg";
import { NewTransactioModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImgWithText} />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactioModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    );
}