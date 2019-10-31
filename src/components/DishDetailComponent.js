import React ,{Component} from 'react';
import  { Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';
import { comment } from 'postcss-selector-parser';
class DishDetail extends Component
{
    render()
    {
        const dish=this.props.dish
        if(dish==null)
            return(<div></div>)
        else{
            const dishType=this.renderDish(dish);
            const commType=this.renderComment(dish.comments);
            return(
                <div className="row">
                    {dishType}
                    {commType}
                </div>
            );

        }
    }
    renderDish(dish)
    {
        if (dish !=null)
        {
            return(
            <div className='col-12 col-md-5 md-5'>
            <card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                < CardBody>
                    <CardTitle >{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>

            </card>
            </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }

    }
    renderComment(comments)
    {
        if(comments==null)
        return(<div></div>)
        else{
            const cm=comments.map(comment =>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author},
                        &nbsp;
                        { new Intl.DateTimeFormat('en-Us',{
                            year:'numeric',
                            month:'short',
                            day:'2-digit'

                        }).format(new Date(comment.date))}
                        </p>
                    </li>
                );
            }
                )
                return(
                    <div className='col-12 col-md-5 md-5'>
                        <h4>comments</h4>
                        <ul className='list-unstyled'>
                                 {cm}
                        </ul>
                    </div>
                );
        }
    }
}
export default DishDetail;