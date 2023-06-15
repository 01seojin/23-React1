import styled from "styled components";

const Wrapper = styled.div`
    padding : 1rem;
    display : flex;
    flex-direction : row;
    align-items : flex-start;
    justyfy-content: flex-start;
    background-color : lightgrey;
`;

const Block = styled.div`
    padding : ${(props) => props.padding};
    border : 1px solid black;
    border-radius : 1rem;
    background-color : ${(props) => props.background}
`
