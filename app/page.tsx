"use client"; // allows use to use hooks that do not work in the server
import SignIn from "@/components/SignIn";
import styled from "styled-components";
import { useSession } from "next-auth/react";

//styled components for UI
const HomeDiv = styled.div`
    
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
   
    align-content: center;
    background: #633bf5;
    
    background: linear-gradient(180deg, rgba(99, 59, 245, 1) 0%, rgba(152, 87, 199, 1) 50%);
    
`

const AuthCard = styled.div`
    margin: 0 auto;
    padding-top: 30px;
    width: 60vw;
    height: 40vh;
    justify-self: center;
    border-radius: 5vw;
    
    background-color: #4a4e69;

    text-align: center;
    align-items: center;

    font-family: "Futura", "Futura Medium", "Century Gothic", AppleGothic, sans-serif;
    &:hover {
        box-shadow: 0 0 10px #4361ee, 0 0 20px #4361ee, 0 0 40px #4361ee;
        color: #f72585;
       
    }

`
const StyledP = styled.p`
    color: white;
    margin: 10px;
    font-size: calc(10px + 1.5vw);
    font-weight: bold;
    
`

const StyledImg = styled.img`
    align-self: center;
    justify-self: center;
 
    border-radius: 50%;
    width: 10vh;
    
    
`
//initializing HomePage function that checks for user auth and displays the necessary component
// based on that condition
export default function HomePage() {
    //a React hook that checks if someone is signed in
    const {data: session, status} = useSession();

    // if the user is authenticated display the page with user info
    if (status === "authenticated") {
        //if the image url exists then store that url else use a default img
        //needed to use this because adding the url directly to src caused an error because
        // the url could be a string, null or undefined
        const imgUrl = session?.user?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";

        //component for the user info page
        return(
        <HomeDiv>
            <AuthCard>


                <StyledImg src={imgUrl} alt="user's github profile picture"/>



                <StyledP>
                    Signed in as {session?.user?.name}

                </StyledP>
                <StyledP>

                    Email: {session?.user?.email}
                </StyledP>
            </AuthCard>
        </HomeDiv>
        )

    }
//else return and display the sign in component
    return (

        <HomeDiv>
            <SignIn/>
        </HomeDiv>
    );



}
