import React from 'react';
import {withRouter} from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }
 
    // componentDidUpdate(prevProps){
    //     if (prevProps.signedIn === true) {
    //         this.props.history.push('/');
    //     }
    //     this.setState({errors: prevProps.errors});
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user={
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error,i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }


    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder = "Username"
                        />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder = "Email"
                        />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder = "Password"
                        />
                        <input type="submit" value="Submit" />

                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);