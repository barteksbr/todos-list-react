import styled from "styled-components";


export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.white};
    margin: 10px 0;
`;

export const Header = styled.header`
    padding: 15px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 15px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(184, 180, 180);

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;


export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
`;

export const Sbody = styled.div`
padding: 20px;
`;