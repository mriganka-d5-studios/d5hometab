import React from 'react';
import './Card.css';

class Card extends React.Component {
    
    render(){

        const {name, email,id}= this.props;
        return(
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <div className='img1'><img  alt='robots' src={`https://robohash.org/${id}test?100x100`}/></div>
                <div>

                 <h2>{name }</h2>
                <p>{email }</p>
                </div>
            </div>
        );

    }
}

export default Card;