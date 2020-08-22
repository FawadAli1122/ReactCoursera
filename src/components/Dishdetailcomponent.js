import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import Menu from './MenuComponent';



export const Renderdish= (selectedDish) =>{
  if (selectedDish!=null){
    return(
      <Card>
        <CardTitle>{selectedDish.name}</CardTitle>
          <CardImg src={selectedDish.image} alt={selectedDish.name}/>
          <CardText >{selectedDish.description}</CardText>
      </Card>
    );
  }
  else {
    return (
      <div></div>
    );
  }
}

export const Rendercomments=(props) =>{
  if(props != null && props.comments != null) {
    props.comments.map(review => {
      return (
        <div key={review.id}>
          <Card>
            <h4>Comments</h4>
            <ul className="list-unstyled">
              <li className="list-item">{review.comment}</li>
              <li className="list-item">{review.author}</li>
            </ul>
          </Card>
        </div>

      );
    });
  }

  else {
    return (
      <div></div>
    );
  }
}

  
    /*return(
      <div>
      <div >
        {renderDish()}
      </div>
      <div >
        {renderComments()}
        
    </div>
    </div>
    )*/
 
  













