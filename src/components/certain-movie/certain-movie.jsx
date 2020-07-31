import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';

import './certain-movie.scss';

class CertainMovie extends Component {
    render(){
        return(
            <Fragment>
                {this.props.isOpenMovie && (
                    <div>
                        Hi
                {console.log(this.props.movies.map(todo => <li key={todo.id}>{todo.title}</li>))}
                    </div>
                ) /*<Redirect to={`/${title}`} /> */
                }
            </Fragment>
        )
    }
}

export default CertainMovie;