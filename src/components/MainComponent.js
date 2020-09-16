import React, {Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Renderdish, Rendercomments} from './Dishdetailcomponent';
import {DISHES} from '../shared/dishes';


class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dishes: DISHES,
      selectedDish: null

    };
    
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render(){
    return (
        <div>
            <Header />
            <Menu dishes={this.state.dishes} 
              onClick={(dishId) => this.onDishSelect(dishId)}/>
            <div className="container">
             <div className="row">
              <Renderdish 
                dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]}/>
              <div className="col-12 col-md-5 m-1">
                <Rendercomments 
                  dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]}/>
              </div>
             </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Main;
