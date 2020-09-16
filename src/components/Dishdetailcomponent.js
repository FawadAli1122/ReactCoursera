import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';




export const Renderdish=({dish}) =>{
    if (dish!=null)
      return(
              <div className="col-12 col-md-5 m-1">
                <Card>
                  <CardImg  src={dish.image} alt={dish.name}/>
                    <CardImgOverlay >  
                      <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                      <CardText >{dish.description}</CardText>
                </Card>
              </div> 
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
    
      dish.comments.map((review,i) =>{
        return(
           
              <div key={i}>
              <p >{review.comment}</p>
              <h3>{review.author}</h3>
              <p>{new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(review.date)))}</p>
              </div>
         

    );}))
    
  else {
    return (
      <div>
        Dish is Null
      </div>
    );
   }
  }
  


 
 















