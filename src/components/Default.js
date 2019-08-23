import React, { Component } from 'react';

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase">
                        <h1 className="display-2">404 Not found</h1>
                        <h2>error</h2>
                        <h3>This is URl <span className="text-danger">{this.props.location.pathname}</span> not found</h3>
                    </div>
                </div>
            </div>
        )
    }
}
