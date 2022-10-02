import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps)=>(
    `
        display: flex;
        padding: 10px;
        margin-bottom: 10px;
        align-items: center;
        gap: 10px;
        
        border-radius: 10px;
        background-color: #20212C;
        
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