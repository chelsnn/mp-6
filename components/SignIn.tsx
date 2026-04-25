"use client";

import styled from "styled-components";
import Link from "next/link";

const PageDiv = styled.div`
    margin: 0 auto;
    width: 40vw;
    height: 50vh;
    justify-self: center;
    border-radius: 5vw;
    box-shadow: 10px 10px 5px #36454F;
    background-color: white;
    
    text-align: center;
    
    font-family: "Futura", "Futura Medium", "Century Gothic", AppleGothic, sans-serif;


`


const StyledButton = styled.div`
    background-color: #f72585;
    color: white;
    width: 20vw;
    height: 5vw;
    border-radius: 2vw;
    box-shadow: 5px 2px 2px #36454F;
    font-size: calc(10px + 1.5vw);
    
   
   
    
    &:hover {
        background-color: rgb(255, 255, 255);
        color: #f72585;
    }
`

export default function SignIn() {

    return (

        <PageDiv>
            {/*use curly brackets and the meme JSON's key to access and
                        display the values of the name and image*/}
            <StyledButton>
            <Link href={`/api/auth/signin`}>SignIn</Link>
            </StyledButton>
        </PageDiv>






    );
}

