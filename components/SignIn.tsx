"use client"; // for hooks that are not used in the Server
import styled from "styled-components";
import { signIn } from "next-auth/react"

//styled component styling format
const PageDiv = styled.div`
    margin: 0 auto;
    width: 60vw;
    height: 40vh;
    
    border-radius: 5vw;
    box-shadow: 10px 10px 5px #003049;
    background-color: #4a4e69;
    
    align-content: center;
    
    text-align: center;
    
    font-family: "Futura", "Futura Medium", "Century Gothic", AppleGothic, sans-serif;


`


const StyledButton = styled.button`
    background-color: #f72585;
    
    color: white;
    width: fit-content;
    padding: 1vh;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    height: fit-content;
    border-radius: 2vw;
    box-shadow: 5px 2px 2px #003049;
    font-size: calc(10px + 1.5vw);
    
   
   
    
    &:hover {
        background-color: rgb(255, 255, 255);
        color: #f72585;
    }
`
const StyledH1 = styled.h1`
    color: white;
    font-size: calc(20px + 1.5vw);
    text-align: center;
    margin-bottom: 4vh;
    
    font-weight: bold;
    
`
//initializing sign in component that sends users to the Git OAuth
export default function SignIn() {

    return (

        <PageDiv>
            <StyledH1>OAuth Project</StyledH1>

            {/* when the button is clicked it runs the signIn function from next auth and tells
             it to use GitHub as a provider */}
            <StyledButton onClick={() => signIn("github")}>Sign in with GitHub

            </StyledButton>
        </PageDiv>






    );
}

