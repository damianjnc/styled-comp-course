import styled from 'styled-components'

const PropsButton = styled.button`
    background: ${props => props.color ? props.color : 'black'};
    color: white;
    padding: 1rem;
    font-size:2rem;
`

//extending the styled component
export const BigButton = styled(PropsButton)`
    text-transform: capitalize;
    color: pink;
    font-size: 3rem;
`


export default PropsButton;
