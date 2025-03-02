import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImgWithText from "../../assets/ignite-with-text-logo.svg";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImgWithText} />

                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    );
}