import React from 'react';

const Film = ({film}) =>
  <div className="">
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="form-group">
          <img
            className="img-responsive img-thumbnail"
            src={ film.poster }/>
        </div>

        <div className="form-group">
          <span>{ film.title }</span>
        </div>
      </div>
    </div>
  </div>

export default Film