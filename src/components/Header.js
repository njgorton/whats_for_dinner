import React from 'react'
import styled from 'styled-components'

// ===== STYLES =====
const HeaderHeader = styled.header`
    width: 100%;
    padding: 3rem;
    background: linear-gradient(to bottom, black, red);
`

const H1Header = styled.h1`
    font-family: var(--font-heading);
    font-size: 7rem;
    text-align: center;
    color: var(--color-primary);
`

// ===== COMPONENT =====
const Header = () => {
    return (
        <HeaderHeader>
            <H1Header>What's For Dinner?</H1Header>
        </HeaderHeader>
    )
}

export default Header