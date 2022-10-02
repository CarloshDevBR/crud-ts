import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    padding: 10px;
    gap: 10px;
    
    border: 1px solid #555;
    border-radius: 15px;

    img {
        width: 25px;
        height: 25px;
    }

    input {
        flex: 1;
        border: 0px;
        background: transparent;
        outline: 0;
        color: #FFF;
        font-size: 18px;
    }
`