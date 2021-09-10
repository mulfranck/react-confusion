import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends React.Component {
  showImg() {
    const imgInfo = this.props.theSelectedIs;

    if(imgInfo !== null  && imgInfo !== undefined) {
      return (
        <Card className="col-md-5 col-12">
              <CardImg src={imgInfo.image} alt={imgInfo.name}></CardImg>
              <CardBody>
                <CardTitle className="text-center">
                    <h3>{imgInfo.name}</h3>
                  </CardTitle>
                <CardText> {imgInfo.description} </CardText>
              </CardBody>
            </Card>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
  showComments() {
    const commentInfo = this.props.theSelectedIs;

    if(commentInfo){
      return (
        <div  className="col-md-5 col-12">
          <h3 className="display-4 mb-3 mt-0">Comments</h3>
          {
            commentInfo.comments.map(forAComment => {
                  return (
                    <div key={forAComment.id}>
                      <p>{ forAComment.comment}</p>
                      <p>&nbsp;&mdash; {forAComment.author},&nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                          year:'numeric',
                          month:'short', 
                          weekday:'short'
                        }).format(new Date(Date.parse(forAComment.date)))}
                      </p>
                    </div>
                  )
            })
          }
        </div>
      )
    } else {
      <div></div>
    }
  }
  
  render() {
    return (
      <div className="row justify-content-center my-5">
        {this.showImg()}
        {this.showComments()}
      </div>
      )
  }
}


export default DishDetail;