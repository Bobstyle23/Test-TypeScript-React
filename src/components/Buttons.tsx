import React from 'react'
import styled from "styled-components"

const Buttons= () =>{

    const Button = styled.button`
    font-weight: 500;
    background-color: red;
    border: 5px solid red;
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    color: white;
    `

    return (
        <div>
            <Button>First Button</Button>
            <Button>Second Button</Button>
        </div>
    )
}

export default Buttons
