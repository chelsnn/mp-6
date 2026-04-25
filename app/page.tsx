
import SignIn from "@/components/SignIn";
import styled from "styled-components";

const HomeDiv = styled.div`
    
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
   
    align-content: center;
    background: #633bf5;
    
    background: linear-gradient(180deg, rgba(99, 59, 245, 1) 0%, rgba(152, 87, 199, 1) 50%);
    
`
export default function HomePage() {
  return (
      <HomeDiv>
      <SignIn/>
      </HomeDiv>
  );


}
