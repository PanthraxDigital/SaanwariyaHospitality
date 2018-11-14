import React from "react";

class AlertToast extends React.Component {
  render() {
    return (
      <div class="alert alert-danger">
        <strong>Danger!</strong> Indicates a dangerous or potentially negative
        action.
      </div>
    );
  }
}

export default AlertToast;
