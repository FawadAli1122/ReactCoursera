import React  from 'react';

//import { Media } from 'reactstrap';

import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

/*Class based Component
class Menu extends Component {
  constructor(props) {
   super(props);
  }
componentDidMount(){
 console.log('Menu Component componentDidMount invoked');
}

componentDidUpdate(){
console.log('Menu Component componentDidUpdate invoked');
}

componentDidMount(){
  
}


  // renderDish(dish) {
  //   if(dish != null) {
  //     return (
  //       <Card>
  //         <CardTitle>{dish.name}</CardTitle>
  //         <CardImg src={dish.image} alt={dish.name}/>
  //         <CardText >{dish.description}</CardText>
  //       </Card>
  //     );
  //   }

  //   else {
  //     return (
  //       <div></div>
  //     );
  //   }
  // }

  render() {
    
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          
          <Card onClick={()=> this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay className="ml-5">
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay> 
          </Card>
        </div>
      );
    });



    return (
      <div className="container">
        <div className="row" >
          {menu}
        </div>

      </div>
    )
  }
}


export default Menu;

*/


function RenderMenuItem({dish,onClick}){
  return(
          <Card onClick={()=> onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay className="ml-5">
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay> 
          </Card>
  );
}

const Menu=(props)=>{

  const menu = props.dishes.map(dish => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick}/>
      </div>
    );
  });
  
  return (
    <div className="container">
      <div className="row" >
        {menu}
      </div>
  
    </div>
  );
}


export default Menu;
