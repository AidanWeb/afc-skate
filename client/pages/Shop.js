import React, { useState } from "react";
import { Form, FormControl, Button, CardDeck, Card } from 'react-bootstrap';

import { getAllProducts } from "../api"

import Nav from 'react-bootstrap/Nav'
import Featured from "../components/Featured"
import FeaturedCard from "../components/FeaturedCard"
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

import "./Shop.css";
import { all } from "../../server/routes";


const Shop = ( {products} ) => {
   const [ filteredProducts, setFilteredProducts ] = useState(products)

  const featuredArray = products.filter(product => {
    
    return product.featured
  })
  const handleCategoryChange = (eventKey) => {
    console.log("eventKey", eventKey)

    const prodArr = products.filter(product => { 
      console.log("product", product)
      
    eventKey = "all" ? true : product.categoryId == eventKey;
    
  })
    console.log("<<<<<", prodArr)
      setFilteredProducts(prodArr)
  }


   return (

        
      <div className= "shopPage">

          <Card style = {{
            "alignItems":"center",
            "marginTop":"2rem"
          }}>
            <Card.Title >Featured Products</Card.Title>
          </Card>
          
          <Featured featuredArray = {featuredArray} />
      
          <div className= "shopNav">
              <Nav className="justify-content-center margin-top-2rem " activeKey="all">
              <Nav.Item>
                <Nav.Link eventKey="all" onSelect= { handleCategoryChange
                } >All Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="1" onSelect= { handleCategoryChange
                } >Clothing</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3" onSelect= { handleCategoryChange
                }>Shoes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2" onSelect= { handleCategoryChange
                }>Skateboards
                </Nav.Link>
              </Nav.Item>
              </Nav>
          </div>

          <CardDeck>
          
          {
            filteredProducts.map(prod => (

              <ProductCard 
                key = { prod.id}
                  name = { prod.name } 
                  price = { prod.price }
                  thumbnail = { prod.thumbnail }
                  stock = { prod.stock }
              />
            ))
          }  
         </CardDeck>
     
      </div>

      
    );
  }


export default Shop;
 