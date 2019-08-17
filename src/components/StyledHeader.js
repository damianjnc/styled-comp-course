import React from 'react';
import styled from 'styled-components'

const StyledHeader = ({title}) => {
    return (
        <StyledWrapper>
            <h1>{title}</h1>
            <h2 className='random'>another heading</h2>
        </StyledWrapper>
    );
};

const StyledWrapper  = styled.div`
    background: red;
    transition: all 2s ease-in-out;
    h1{
        color:blue;
    }
    .random{
        color: green;
    }
    &:hover {
        background:lightblue;
    }    
`

export default StyledHeader;
