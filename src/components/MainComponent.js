import React, {Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Renderdish, Rendercomments} from './Dishdetailcomponent';
import {DISHES} from '../shared/dishes';
import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      dishes: DISHES,

    };
    
  }


  render(){

    const Homepage=()=>{
      return(
        <Home/>
      );
    }
    return (
        <div>
            <Header />
            <Switch>
              <Route path="/home" component={Homepage}/>
              <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} />
              <Redirect to="/home"/>
            </Switch>
            <Footer />
        </div>
    );
  }
}

export default Main;


/* Return to show different components before introducing router in there
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
            */
           
