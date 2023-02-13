import styled from "styled-components";


export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
`;

export const Button = styled.button`
    padding: 10px;
    background: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: 0.5s;

    &:hover {
        background: rgb(36, 154, 208);
        transform: scale(1.2);
    }

    &:active {
        background: rgb(46, 153, 203);
    }
`;