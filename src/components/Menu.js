import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { AllDishes } from '../shared/AllDishes';
import DishDetail from './DishDetail';


class MenuPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allDishes: AllDishes,
      selectedDish:null
    }
  }
  selectedThis(dish) {
    this.setState(
      { selectedDish: dish }
    );
    setTimeout(console.log(this.state.selectedDish), 500);
  }


  showDishDetail(dish) {
    if(dish) {
      return (
        <Card>
          <CardImg src={dish.image} alt={dish.name}></CardImg>
        </Card>
      )
    } else {
      return (<div></div>)
    }
  }
  render() {
    const prev = this.state.allDishes.map(forADish => {
      return (
          <div key={forADish.id} className="col-md-5 col-12 mx-1 my-3">
            <Card className="card-clickable"
                  onClick={() => this.selectedThis(forADish)}>
              <CardImg src={forADish.image} alt={forADish.name} />
              <CardImgOverlay>
                <CardTitle>{forADish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        )
    })
    return (
      <div className="container">
        <div className="row justify-content-center">
          {prev}
        </div>
        
        
          {/*this.showDishDetail(this.state.selectedDish)*/}
          <DishDetail theSelectedIs={this.state.selectedDish} />
        
      </div>
    )
  }
}

export default MenuPreview;