import React from 'react'
import styled from 'styled-components'


const ToolTipWrapper = styled.div`
    background: ${props => props.theme.colors.grey[900]};
    padding: .5rem;
    color: #FFFFFF;
    white-space: nowrap;
    position: absolute;
    top: 0;
    transform: translateY(-100%);

    &:after {
        content: "";
        height: 1rem;
        width: 1rem;
        background: ${props => props.theme.colors.grey[900]};
        position: absolute;
        bottom: -8px;
        left: 0;
        right: 0;
        margin: auto;
        transform: rotate(45deg);
    }
`;

const Tooltip = (props) => <ToolTipWrapper onClick={() => props.onClick()}>{props.text && props.text}</ToolTipWrapper>;   

export default Tooltip;