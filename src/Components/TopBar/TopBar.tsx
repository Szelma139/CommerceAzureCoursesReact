import React from 'react'
import styled from 'styled-components';
import { SearchBar } from './SearchBar';
import { UserMenu } from './UserMenu';


type Props = {
    children?: React.ReactNode;
}


const Bar = styled.div`
height: 100px;
width: calc(100vw - 100px);
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

&>* {
    padding:1.5rem;
}
`;

export const TopBar = ({ children }: Props) => {
    return (
        <Bar>
            <SearchBar />
            <UserMenu />
        </Bar>
    )
}
