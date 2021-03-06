import React from 'react';
import { AllDishes } from '../shared/AllDishes';
import DishDetail from './DishDetail';
import MenuPreview from './Menu';
import Header from './Header';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allDishes: AllDishes,
      selectedDish:null
    }
  }

  selectThis(dish) {
    this.setState(
      { selectedDishId: dish }
    );
  }

  render() {
    return (
      <div className=" m-0 p-0">
        <Header />
        
        <MenuPreview dishes={this.state.allDishes}
                      onClick={dishId => this.selectThis(dishId)} />
        
        <DishDetail theSelectedIs={
          (this.state.allDishes.filter(
            dishes => dishes.id === this.state.selectedDishId
          )[0])
        } />
      </div>
    )
  }
}

export default Main;
