import React, {Component} from 'react';
import {Film} from './Film';

export class FilmList extends Component {

    render() {
        return (
            <div>
                {
                    this.props.films.map((item, index) => (
                        <Film
                            film={ item }
                            key={ index }
                        />
                    ))
                }
            </div>
        );
    }
}