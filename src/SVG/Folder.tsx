import styled from 'styled-components';


type ActiveItemProps = {
    active?: Boolean;
}

const SVG = styled.svg<ActiveItemProps>`
fill: ${props => props.active ? "#713BDB" : "#969CBA"};
stroke: ${props => props.active ? "#713BDB" : "#969CBA"};


& path {
    fill: ${props => props.active ? "#713BDB" : "#969CBA"};
stroke: ${props => props.active ? "#713BDB" : "#969CBA"};
}

path:hover {
    fill: ${props => props.active ? "#713BDB" : "#969CBA"};
stroke: ${props => props.active ? "#713BDB" : "#969CBA"};
}
`;

export const Folder = ({ active = false }) => {
    return (
        <SVG active={active} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 18.2222C22 18.6937 21.7893 19.1459 21.4142 19.4793C21.0391 19.8127 20.5304 20 20 20H4C3.46957 20 2.96086 19.8127 2.58579 19.4793C2.21071 19.1459 2 18.6937 2 18.2222V5.77778C2 5.30628 2.21071 4.8541 2.58579 4.5207C2.96086 4.1873 3.46957 4 4 4H9L11 6.66667H20C20.5304 6.66667 21.0391 6.85397 21.4142 7.18737C21.7893 7.52076 22 7.97295 22 8.44444V18.2222Z" fill="#969CBA" fillOpacity="0.2" stroke="#969CBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </SVG>

    )
}
