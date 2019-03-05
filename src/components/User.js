import React,{Component} from "react";
import {BrowserRouter} from "react-router-dom";

export class User extends React.Component {
    onNavigateHome() {
        BrowserRouter.push("/home");
    }

    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.params.id}</p>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}

export default User;