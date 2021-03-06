import styled from 'styled-components';


type ActiveItemProps = {
    active?: Boolean;
}

const SVG = styled.svg<ActiveItemProps>`
fill: ${props => props.active ? "#713BDB" : "#969CBA"};
stroke: ${props => props.active ? "#713BDB" : "#969CBA"};

&>path {
    fill: ${props => props.active ? "#713BDB" : "#969CBA"};
stroke: ${props => props.active ? "#713BDB" : "#969CBA"};
}

path:hover {
    fill: ${props => props.active ? "#713BDB" : "#969CBA"};
stroke: ${props => props.active ? "#713BDB" : "#969CBA"};
}
`;

export const Messages = ({ active = false }) => {
    return (
        <SVG active={active} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="#969CBA" fillOpacity="0.2" stroke="#969CBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 6L12 13L2 6" stroke="#969CBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </SVG>

    )
}
