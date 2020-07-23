import React, { useState } from "react"
import { CardDeck, Card , Button } from 'react-bootstrap'

const FeaturedCard = ({
    name,
    price,
    thumbnail,
    stock
}) => {

   return (
    <CardDeck>
         <Card style ={{
                    "maxHeight":"30rem",
                    "maxWidth":"15rem",
                    "marginTop":"2rem"
                }} >
             <Card.Img variant="top" style = {{
                    "maxHeight": "26rem",
                    "maxWidth" : "12rem",
                }} src= "/assets/images/Shoes/Vans.jpg" />
            <Card.Body style = {{
                        "maxHeight" : "30rem",
                        "maxWidth": "15rem",
                        
                    }}>
                <Card.Title style ={{
                            "textAlign": "center"
                        }} >Vans Retro Stripes Authentic SF </Card.Title>

                <Card.Subtitle className="mb-2 text-muted text-italic"> Price: 49.99 </Card.Subtitle>

                <Card.Subtitle className="mb-2 text-muted text-italic"> Stock: 10 </Card.Subtitle>

                <Button>Add to Cart</Button>
                <Button> + </Button>
                <Button> - </Button>
            </Card.Body>
        </Card>

        <Card style ={{
                    "maxHeight":"30rem",
                    "maxWidth":"15rem",
                    "marginTop":"2rem"
                }} >
             <Card.Img variant="top" style = {{
                    "maxHeight": "26rem",
                    "maxWidth" : "12rem",
                }} src= "/assets/images/Skateboards/believeFullRed.jpg" />
            <Card.Body style = {{
                        "maxHeight" : "30rem",
                        "maxWidth": "15rem",
                        
                    }}>
                <Card.Title style ={{
                            "textAlign": "center"
                        }} >Believe Full Red </Card.Title>

                <Card.Subtitle className="mb-2 text-muted text-italic"> Price: 59.99 </Card.Subtitle>

                <Card.Subtitle className="mb-2 text-muted text-italic"> Stock: 12 </Card.Subtitle>

                <Button>Add to Cart</Button>
                <Button> + </Button>
                <Button> - </Button>
            </Card.Body>
        </Card>
     </CardDeck>


   )
}

export default FeaturedCard;