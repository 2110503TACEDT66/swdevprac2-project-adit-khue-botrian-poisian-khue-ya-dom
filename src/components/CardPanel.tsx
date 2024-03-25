'use client'

import ProductCard from "./ProductCard"


export default function CardPanel() {
    
    return (
        <div>
            <div style={{margin:"20px", display:"flex",flexDirection:"row",alignContent:"space-around" , justifyContent:"space-around", flexWrap:"wrap"}}>
               <ProductCard restaurantName='1' imgSrc='/img/restaurant1.jpg'/>
               <ProductCard restaurantName='2' imgSrc='/img/restaurant2.jpg'/>
               <ProductCard restaurantName='3' imgSrc='/img/restaurant3.jpg'/>
               <ProductCard restaurantName='4' imgSrc='/img/restaurant4.jpg'/>
            </div>         
        </div>
    )
}