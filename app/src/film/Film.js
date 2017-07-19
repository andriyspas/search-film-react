import React, { Component } from 'react';

export class Film extends Component {

    constructor(props) {
        super(props);

        this.state = {
            film: props.film
        }
    }

    render() {
        return (
            <div className="">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="form-group">
                            <img
                                className="img-responsive img-thumbnail"
                                src={ this.state.film.poster }/>
                        </div>

                        <div className="form-group">
                            <span>{ this.state.film.title }</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}