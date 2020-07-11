import React from 'react';
import NavBar from './NavBar.js';

const LoginPage = () => {

    let emailField, passwordField;

    const loginUser = () => {
        console.log(emailField.value, passwordField.value);
    }

    return(
        <div>
             <NavBar />
             <h1>Login</h1>

            <div className="container">
                <div className="row">
                    <div className="col-sm" 
                    style={{maxWidth: '400px', margin: '0 auto'}}>
                        <div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">
                                    Email address
                                </label>

                                <input 
                                ref={(comp)=> emailField = comp}
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>

                                <input
                                ref={(comp)=> passwordField = comp} 
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword1"/>
                            </div>

                            <button 
                            onClick={loginUser}
                            type="button"
                            className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default LoginPage;