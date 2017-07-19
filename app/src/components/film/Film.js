import React from 'react';
import { Panel, FormGroup, Thumbnail } from  'react-bootstrap';

const Film = ({film}) =>
    <Panel>
        <FormGroup>
            <Thumbnail src={ film.poster } />
        </FormGroup>

        <FormGroup>
            { film.title }
        </FormGroup>
    </Panel>;

export default Film