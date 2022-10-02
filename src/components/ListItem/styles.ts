import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div `
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
    
    border-radius: 10px;
    background-color: #20212C;
`

export const ContainerTask = styled.div(({ done }: ContainerProps)=>(
    `  
        display: flex;
        width: 50%;
        align-items: center;
        gap: 10px;

        input {
            width: 25px;
            height: 25px;
            margin-right: 5px;
            cursor: pointer;
        }

        label {
            color: #CCC;
            text-decoration: ${done ? 'line-through' : 'initial'};
        }
    `
))

export const ContainerImage = styled.div `
    width: 50%;

    img {
        width: 25px;
        height: 25px;

        float: right;

        cursor: pointer;
    }
`