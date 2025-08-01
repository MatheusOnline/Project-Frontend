import { HeaderContainer } from "./styled"
import Title from "../title"
import InputSeach from "../inputSeach"
function Header(){
    return(
        <HeaderContainer>
            <Title/>
            <InputSeach/>
        </HeaderContainer> 
    )
}

export default Header;