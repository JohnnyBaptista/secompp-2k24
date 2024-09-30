import React from 'react'
import { Container } from './ButtonStyles'

const CustomButton = (props) => {
    return (
        <Container onClick={props.onClick}>
            {props.children}
        </Container>
    )
}

export default CustomButton;