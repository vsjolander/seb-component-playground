import * as React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

import Logo from './Logo'

const SideNavContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: ${props => props.theme.desktop.sideNavWith}px;
    height: 100%;
    background: #000;
    display: flex;
    flex-direction: column;
    transform: translate(-100%);

    @media screen and (min-width: 720px) {
        transform: translate(0%);
    }
`;

const SideNavHeader = styled.div`
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 56px;
    width: 100%;
    margin-bottom: 40px;
`;

const SideNavHeaderText = styled.div`
    color: #fff;
    font-weight: 600;
    padding-left: 16px;
`;

const SideNavSectionHeader = styled.div`
    color: #fff;
    font-weight: 600;
    padding: 16px 0 16px 16px;
    font-size: 12px;
`;

const SideNavLink = styled(NavLink)`
    color: #fff;
    font-weight: 500;
    padding: 8px 8px 8px 16px;
    font-size: 16px;

    &.active {
        background-color: #2E8500;
    }

    &:hover {
        color: #fff;
        text-decoration: none;
    }
`;

const SideNavWrapper = styled.div`
    width: 100%;
    @media screen and (min-width: 720px) {
        padding-left: ${props => props.theme.desktop.sideNavWith}px;
    }
`

const routes = {
    components: [
        {
            name: "Slide toggle",
            path: "slide-toggle"
        },
        {
            name: "Date picker",
            path: "date-picker"
        },
    ]
}

const SideNav = (props) => {
    return (
        <SideNavWrapper>
        <SideNavContainer>
            <SideNavHeader>
                <Logo />
                <SideNavHeaderText>Component Playground</SideNavHeaderText>
            </SideNavHeader>
            <SideNavSectionHeader>Components</SideNavSectionHeader>
            {routes.components.map( item => <SideNavLink to={item.path} activeClassName="active" key={item.path}>{item.name}</SideNavLink>)}
        </SideNavContainer>
        {props.children}
        </SideNavWrapper>
    );
}

export default SideNav;