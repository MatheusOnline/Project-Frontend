import { Container, ContainerData, Date, ContainerContent, Title , Content} from "./styled";

import Like from "../likeButton";

function Post({ date ,title, content}){
    return(
        <Container>
            <ContainerData>
                <Date>{date }</Date>
                <Like/>
            </ContainerData>
            <ContainerContent>
                <Title>{title}</Title>
                <Content>{content}</Content>
            </ContainerContent>
        </Container>
    )
}

export default Post;