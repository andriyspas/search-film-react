import React from 'react';

const Actor = ({ actor }) =>
  <div className="col-sm-6 col-md-4 col-lg-3 panel-group">
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3 m-b-md">
            <img
              className="img-responsive img-thumbnail"
              src={ actor.photo }/>
          </div>
        </div>

        <div className="form-group">
          <span>{ actor.name }</span>
        </div>
      </div>
    </div>
  </div>

export default Actor
