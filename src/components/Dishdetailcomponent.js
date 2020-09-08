import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';




export const Renderdish=({dish}) =>{
    if (dish!=null)
      return(
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay >  
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            <CardText >{dish.description}</CardText>
            
          </Card>
      );
  
    else {
      return (
        <div></div>
      );
  }
}



export const Rendercomments=({dish}) =>{
  if(dish != null && dish.comments!=null)
    
    return (
      dish.comments.map((review) =>{
        return(
          <div key={review.id}>
              <text>{review.comment}</text>
              <h2>{review.author}</h2>
                <p>{review.date}</p>
          </div>
    )}))
    
  else {
    return (
      <div>
        Dish is Null
      </div>
    );
   }
  }
  


 
 















