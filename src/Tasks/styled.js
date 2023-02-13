import styled, { css } from "styled-components";

export const TasksLi = styled.ul`
    list-style: none;
    margin: 0;
    padding: inherit;
`;

export const Items = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid rgb(231, 219, 219);

    ${({ hidden }) => hidden && css`
    display: none;
`}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
    text-decoration: line-through;
`}
`;

export const Button = styled.button`
    border:none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background: green;

        &:hover {
        background: rgb(127, 255, 0);
        }
    `}

    ${({ remove }) => remove && css`
        background: red;
    `}
`;