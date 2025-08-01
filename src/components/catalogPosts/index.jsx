import { Container, Area_Posts } from "./styled"

import Post from "../post"

const posts = [
    {
        date: "12/07/2024",
        name: "O que é linguagem de programação? Conheça as principais",
        content: "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."
    },
    {
        date: "12/07/2024",
        name: "O que é linguagem de programação? Conheça as principais",
        content: "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."
    },
    {
        date: "12/07/2024",
        name: "O que é linguagem de programação? Conheça as principais",
        content: "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."
    }, 
    {
        date: "12/07/2024",
        name: "O que é linguagem de programação? Conheça as principais",
        content: "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."
    },
]




function Container_Posts(){
    function genCatalog(){
        return posts.map((element, index) => (
            <Post  
                key={index}
                date={element.date} 
                title={element.name} 
                content={element.content}/>
        ));
    }
    return(
        <Container>
            <Area_Posts>
                {genCatalog()}
            </Area_Posts>
        </Container>
    )
}

export default Container_Posts