import React from "react";
import "./Edit.css";
import axios from "axios";
import $ from "jquery";
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      city: "",
      phone: "",
      gender: "",
      languages: [],
      img: "",
      description: "",
    };
  }
  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handleAge(e) {
    this.setState({ age: e.target.value });
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handlePhone(e) {
    this.setState({ phone: e.target.value });
  }
  handleGender(e) {
    this.setState({ gender: e.currentTarget.value });
  }
  handleLanguages(e) {
    let x = this.state.languages;
    if (e.target.checked) x.push(e.target.value);

    this.setState({ languages: x });
  }
  handleCity(e) {
    this.setState({ city: e.target.value });
  }
  handleArea(e) {
    this.setState({ description: e.target.value });
  }
  handleClick(e) {
    e.target.value = "";
  }
  handleImg() {}

  handleSubmit() {
    let x = {
      name: this.state.name,
      description: this.state.description,
      age: this.state.age,
      email: this.state.email,
      gender: this.state.gender,
      phone: this.state.phone,
      languages: this.state.languages,
      city: this.state.city,
    };
    axios.post("/", x);
    window.location.reload(false);
  }

  render() {
    return (

      <div className="container">
        <form>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            onChange={this.handleName.bind(this)}
          />
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            placeholder="Age"
            onChange={this.handleAge.bind(this)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email Address"
            onChange={this.handleEmail.bind(this)}
          />
          <br></br>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Your city"
            onChange={this.handleCity.bind(this)}
          />
          <br></br>
          <label htmlFor="phone">Phone Number</label>
          <br></br>
          <input
            type="text"
            id="phone"
            placeholder="Phone number"
            onChange={this.handlePhone.bind(this)}
          />
          <label htmlFor="gender">Gender</label>

          <select id="gender" onChange={this.handleGender.bind(this)}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <h4>Choose your Languages :</h4>
          <br></br>
          <input
            onChange={this.handleLanguages.bind(this)}
            type="checkbox"
            className="lan"
            id="Arabic"
            defaultValue="Arabic"
          />
          <label htmlFor="Arabic">Arabic</label> <br></br>
          <input
            onChange={this.handleLanguages.bind(this)}
            type="checkbox"
            className="lan"
            id="Chinese"
            defaultValue="Chinese"
          />
          <label htmlFor="Chinese">Chinese</label>
          <br></br>
          <input
            onChange={this.handleLanguages.bind(this)}
            type="checkbox"
            id="English"
            className="lan"
            defaultValue="English"
          />
          <label htmlFor="English">English</label>
          <br></br>
          <input
            onChange={this.handleLanguages.bind(this)}
            type="checkbox"
            id="French"
            className="lan"
            defaultValue="French"
          />
          <label htmlFor="French">French</label>
          <br></br>
          <input
            onChange={this.handleLanguages.bind(this)}
            type="checkbox"
            id="German"
            className="lan"
            defaultValue="German"
          />
          <label htmlFor="German">German</label>
          <br></br>
          <input
            onChange={this.handleLanguages.bind(this)}
            type="checkbox"
            className="lan"
            id="Italian"
            defaultValue="Italian"
          />
          <label htmlFor="Italian">Italian</label>
          <br></br>
          <input
            onChange={this.handleLanguages.bind(this)}
            type="checkbox"
            id="Portuguese"
            className="lan"
            defaultValue="Portuguese"
          />
          <label htmlFor="Portuguese">Portuguese</label>
          <br></br>
          <input
            onChange={this.handleLanguages.bind(this)}
            type="checkbox"
            id="Russian"
            className="lan"
            defaultValue="Russian"
          />
          <label htmlFor="Russian">Russian</label>
          <br></br>
          <br></br>
          <br></br>
          <textarea
            name="message"
            style={{ width: "300px", height: "300px" }}
            onChange={this.handleArea.bind(this)}
            defaultValue="Enter your description here."
            onClick={this.handleClick.bind(this)}
          ></textarea>
          <label htmlFor="myfile">Photo :</label>
          <br></br>
          <br></br>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={this.handleImg.bind(this)}
          ></input>
          <br></br>
          <br></br>
          <button type="button" onClick={this.handleSubmit.bind(this)}>
            Submit
          </button>

        </form>
      </div>
    );
  }
}

export default Edit;
