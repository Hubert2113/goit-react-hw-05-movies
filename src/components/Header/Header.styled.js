import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    text-decoration: none;
    color: #000;
    font-size: 16px;
    font-weight: 500;

    &:not(:first-child){
        margin-left: 20px;
    }

    &.active{
        color: rgb(179, 24, 47);
    }
`