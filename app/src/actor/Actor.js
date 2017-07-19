import React, { Component } from 'react';

export class Actor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actor: props.actor
        }
    }

    render() {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3 panel-group">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3 m-b-md">
                                <img
                                    className="img-responsive img-thumbnail"
                                    src={ this.state.actor.photo }/>
                            </div>
                        </div>

                        <div className="form-group">
                            <span>{ this.state.actor.name }</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
