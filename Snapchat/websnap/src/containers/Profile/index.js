import React, {Component} from "react";
import jwt_decode from 'jwt-decode';

class Profile extends Component{
    constructor() {
        super();
        this.state = {
            login: '',
            email: '',
        }
    }
    componentDidMount() {
        const token =localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            login: decoded.login,
            email: decoded.email,
        })
    }
    // triggerDelete(profile){
    //     if(window.confirm("Are you sure you want to delete this task?")){
    //
    //         this.setState(prevState => ({
    //             taskList: [...prevState.taskList.slice(0, profile), ...prevState.taskList.slice(profile + 1)]
    //         }))
    //
    //     }
    // }


    render() {
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                        <tr>
                            <td>Login</td>
                            <td>{this.state.login}</td>
                            <button className="btn btn-primary">Edit</button>&nbsp;
                            <button className="btn btn-danger">Delete</button>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                            <button className="btn btn-primary">Edit</button>&nbsp;
                            <button className="btn btn-danger" >Delete</button>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile