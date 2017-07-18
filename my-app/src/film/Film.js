import React, { Component } from 'react';

export class Film extends Component {
    test = () => {
        fetch('http://localhost:8080/api/film/get/film/title/red', { method: 'GET' })
            .then(resp => resp.json())
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    render() {
        return (
            <div></div>
        );
    }

    constructor(properties) {
        super(properties);

        this.test();
    }
}
