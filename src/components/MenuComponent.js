import React, {Component} from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';



class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
  }


  renderDish(dish) {
    if(dish != null) {
      return (
        <Card>
          <CardTitle>{dish.name}</CardTitle>
          <CardImg src={dish.image} alt={dish.name}/>
          <CardText >{dish.description}</CardText>
        </Card>
      );
    }

    else {
      return (
        <div></div>
      );
    }
  }

  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
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
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.state.selectedDish)}
            </div>
            
        </div>
      </div>
    )
  }
}


export default Menu;
