import React from "react";
import "./profile.css";
class FindProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="Profile">
        <p>Description : {this.props.data.description}</p>
        <p>Name : {this.props.data.name}</p>
        <p>City : {this.props.data.city}</p>
        <p>Age : {this.props.data.age}</p>
        <p>Gender :{this.props.data.gender}</p>
        <p>Languages : {this.props.data.languages.toString()}</p>
      </div>
    );
  }
}
export default FindProfile;
