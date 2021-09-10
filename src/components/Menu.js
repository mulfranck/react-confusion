import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


const MenuPreview = (props) => {

  const prev = props.dishes.map(forADish => {
    return (
      <div key={forADish.id} className="col-md-5 col-12 mx-1 my-3">
        <Card className="card-clickable"
            onClick={() => props.onClick(forADish.id)}>
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
      </div>
    )
}

export default MenuPreview;