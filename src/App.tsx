 import styled from '@emotion/styled'
import React, {useState} from 'react'
import mealplan from "./assets/mealPlanning.jpg"
import meal from "./assets/mealPlan1.jpg"
import Foodplan from "./Food.json"
import foodLogo from "./assets/foodLogoRg.png"


 const Container = styled.div`
 width: 700px;
 height: 800px;
 background-color: whitesmoke;

 
  button {
    /* justify-content: center; */
    /* justify-self: center; */
    background-color: #941E5A ;
  color: black;
  }

 
 /* @media screen and (min-width : 320px) and (max-width : 768px){
 
 } */
 
 `
 const FoodCard = styled.div`
 color: black;
 padding:10px ;
 font-size: large;
 font-weight: 500px;
 line-height: 40px;
 text-align: center;
 margin-top: 3 0px;
 /* justify-content: center; */
 /* align-items: center; */
 
 /* @media screen and (min-width : 320px) and (max-width : 768px){
  width: 100%;
 } */

 `
 const Header = styled.div`
 /* padding: 10px; */
 display: flex;
 background-color: #941E5A;
 color: white;
 width: 100%;  
 height: 70px;
 gap: 100px;

 /* @media screen and (min-width : 320px) and (max-width : 768px){ */
  /* overflow: hidden; */
  
  /* width: 100%; */
  h2{
    text-align: center;
    
  
  }
  
 
 
 
 `
 const Navigation = styled.nav`
  display: flex;
  
  /* @media screen and (min-width : 320px) and (max-width : 768px){
    display: none;
  } */

  img{
    width: 80px;
    height: 70px;
    margin-top: 10px;
  }
 `
 const HeroImage=styled.img`
 width: 100%;
 height: 300px;
 object-fit: cover;
 /* @media screen and (min-width : 320px) and (max-width : 768px){
  object-fit: cover;
 } */
 `
 const Breakfast = styled.div``
 const Lunch=styled.div``
 const Dinner=styled.div``
 const Price= styled.div``
 const Img= styled.img`
  width: 100%;
  height: 300px;
  margin-top: 40px;
 `
 const ButtHold=styled.div`
 align-items: center;
 justify-content: center;
 display: flex;
 margin-top: 30px;
 `

 
 
 
 const App:React.FC = () => {
  const [count, setCount] = useState(0)
  const RandomFood=()=>{
    const Random= Math.floor(Math.random()*Foodplan.length)
setCount(Random)
  }
   return (
     <Container>
      <Header>
        <Navigation>
          
      <nav ><img src={foodLogo}/></nav>
        {/* <nav>FoodPlan</nav> */}
        </Navigation>
        <h2>Weight Gain Food Plan</h2>
      </Header>
      <HeroImage src={mealplan}/>
      <FoodCard>
<h2>This is a weight gain food plan for healthy and nutritious balanced meal</h2>
<Breakfast><b>BREAKFAST :-</b>  7:00am - 10:00am ~~ "{Foodplan[count % Foodplan.length].Breakfast}"</Breakfast>
<Lunch><b>LUNCH  :-</b>  2:00pm - 3:00pm ~~ "{Foodplan[count % Foodplan.length].Lunch}"</Lunch>
<Dinner><b>DINNER :-</b>  6:00pm - 7:00pm ~~ "{Foodplan[count % Foodplan.length].Dinner}"</Dinner>
<Price><b>PRICE :-</b>  "{Foodplan[count % Foodplan.length].Price}"</Price>
        </FoodCard>
        <ButtHold>
        <button onClick={RandomFood}>Generate Today's Meal</button>
        </ButtHold>
        <Img src={meal}/>

     </Container>
   )
 }
 
 export default App