import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleLogin = (event) => {
    event.preventDefault()
    if (this.state.username === '' || this.state.password === '') {
      return
    }

    this.props.handleLogin(this.state)
  }

  handleInputChange = (event) => {
    if (event.target.id === 'username') {
      this.setState({username: event.target.value
      })
    } else if (event.target.id === 'password')
      this.setState({ password: event.target.value })
  }


  render() {
    return (
      <form onSubmit = {this.handleLogin} onChange={this.handleInputChange}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text" 
              value={this.state.username}
              onChange={this.handleInputChange}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
