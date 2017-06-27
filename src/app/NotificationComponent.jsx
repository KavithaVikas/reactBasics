import React from 'react';

class NotificationComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = {notifyCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newNotifyCount = this.state.notifyCount + 1;
    this.setState({notifyCount: newNotifyCount});
  }

  render() {
    return (
      <div>
        How Many Notification : <span>{this.state.notifyCount}</span>
        <div><button onClick={this.onLike}>Notification</button></div>
      </div>
    );
  }

}

module.exports = NotificationComponent;