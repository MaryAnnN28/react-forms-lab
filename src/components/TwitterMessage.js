import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      message: '',
      maxChars: 280
    };
  }

  handleCharChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value})
    }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          value={this.state.message}
          type="text"
          name="message"
          id="message"
          onChange={this.handleCharChange} 
        />
        <h3>Remaining Characters: {this.state.maxChars - this.state.message.length}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
