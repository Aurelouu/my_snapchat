import React,{Component} from "react";
import {register} from "../Users/index";

class Register extends Component{
    constructor() {
        super();
        this.state = {
            login:'',
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()

        const user = {
            login: this.state.login,
            email: this.state.email,
            password: this.state.password
        }
        register(user).then(res => {
            this.props.history.push('/login')
        })
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="login">Login</label>
                                <input type="text" className="from-control" name="login" placeholder="Enter login" value={this.state.login} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="from-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="from-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange}/>
                            </div>
                            <button type="submit" className="btn.btn-lg btn-primary btn-block">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;