import styled from "styled-components";




export const Container = styled.article`
    width: 100%;
    height: 200px;
    background-color: #17171A;
    border: 2px solid #252529;
    box-sizing: border-box;
    padding: 18px;
    display: flex;
    gap: 10%;
    flex-direction: column;
    transition: 0.3s ease;
    &:hover{
        border: 2px solid #E07B67 ;
    }
`

export const ContainerData = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
`

export const Date = styled.p`
    color: #E07B67;
    font-size: 14px;
`
export const ContainerContent = styled.div`
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: column;
    gap: 20%;
`

export const Title = styled.h2`
    width: 100%;
    height: 20%;
    color: #FFFFFF;
    font-size: 20px;
    @media (max-width: 600px) {
    font-size: 12px;
  }
`

export const Content = styled.p`

    font-size: 16px;
    color: #AFABB6;
    @media (max-width: 600px) {
    font-size: 10px;
  }
`
