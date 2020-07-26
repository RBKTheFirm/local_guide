import React, { Component } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import "bootstrap-css-only/css/bootstrap.min.css";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import $ from "jquery";
import "./home.css";

import Edit from "../Edit.jsx";
import Search from "../searchbar.jsx";
import FindProfile from "../localguide.jsx";
import Axios from "axios";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      display: "none",
    };
  }
  componentDidMount() {
    Axios.get("/1").then((data) => {
      this.setState({ items: data.data });
    });
  }
  handleSearch() {
    $("#home").css("filter", "blur(8px)");
    $("#home").css("-webkit-filter", "blur(8px)");
    $("#aa10").css("display", "block");
    var span = $(".close3")[0];
    span.onclick = () => {
      $("#aa10").css("display", "none");
      $("#home").css("filter", "");
      $("#home").css("-webkit-filter", "");
    };
  }
  handleClick() {
    $("#home").css("filter", "blur(8px)");
    $("#home").css("-webkit-filter", "blur(8px)");
    $("#aa7").css("display", "block");
    var span = $(".close1")[0];
    span.onclick = () => {
      $("#aa7").css("display", "none");
      $("#home").css("filter", "");
      $("#home").css("-webkit-filter", "");
    };
  }
  changeDisplayLogin() {
    if (this.state.display === "none") {
      this.setState({ display: "block" });
    } else this.setState({ display: "none" });
    $("#aa1").css("display", "none");
    $("#home").css("filter", "");
    $("#home").css("-webkit-filter", "");
  }
  changeDisplaySignup() {
    $("#aa4").css("display", "none");
    $("#home").css("filter", "");
    $("#home").css("-webkit-filter", "");
  }

  loginForm() {
    $("#home").css("filter", "blur(8px)");
    $("#home").css("-webkit-filter", "blur(8px)");
    $("#aa1").css("display", "block");
    var span = $(".close2")[0];
    span.onclick = () => {
      $("#aa1").css("display", "none");
      $("#home").css("filter", "");
      $("#home").css("-webkit-filter", "");
    };
  }

  logoutForm() {
    $("#home").css("filter", "blur(8px)");
    $("#home").css("-webkit-filter", "blur(8px)");
    $("#aa4").css("display", "block");
    var span = $(".close")[0];
    span.onclick = () => {
      $("#aa4").css("display", "none");
      $("#home").css("filter", "");
      $("#home").css("-webkit-filter", "");
    };
  }

  render() {
    return (
      <div>
        <div id="home">
          <header>
            <div>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand id="guide" href="#home">
                  Local-Guide
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <Nav.Link onClick={this.loginForm.bind(this)}>
                      Log In
                    </Nav.Link>
                    <Nav.Link onClick={this.logoutForm.bind(this)}>
                      Sign Up
                    </Nav.Link>
                    <Nav.Link onClick={this.handleSearch.bind(this)}>
                      Search
                    </Nav.Link>
                  </Nav>
                  <button
                    style={{ display: this.state.display }}
                    onClick={this.handleClick.bind(this)}
                  >
                    Create Ad
                  </button>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </header>
          <section id="banner">
            <div className="inner">
              <header>
                <h1>Your Local Guide</h1>
                <p>
                  Connect with private tour guides from different countries
                  without intermediaries, using Your Local Guide for FREE.
                  <br />
                  Independent travel planning provides freedom of action and
                  more...
                </p>
              </header>
            </div>
          </section>
          <div id="main">
            <section className="wrapper style1">
              <div className="inner">
                <div className="flex flex-2">
                  <div className="col col1">
                    <div className="image round fit">
                      <a href="generic.html" className="link">
                        <img src="images/pic01.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col col2">
                    <h3>Ulya Strebulaev, CA, USA</h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>
                      We had the most remarkable family tour with Peter Sommer
                      Travels. Not only everything was perfect, but we felt, in
                      every instance, that our guides and our gulet crew truly
                      cared about us, both the kids and adults, and did their
                      best to make this trip memorable. For our well-traveled
                      children (aged 9 and 6) this definitely has become the
                      most eye-opening, adventurous, and stunning journey of
                      their life - something they will remember, draw upon, and
                      cherish for many years to come.
                    </p>
                    <p>
                      For adults, we were pleasantly surprised by the diversity
                      of our trip: from neolithic archaeological sites to
                      medieval castles, from swimming to get obsidian to talks
                      on board of our wonderful gulet, from ever-changing and
                      filled with surprises meals offered on board to culinary
                      experiences on the shore, every island and every new
                      activity offered new experiences. We definitely will be
                      back!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="wrapper style2">
              <div className="inner">
                <div className="flex flex-2">
                  <div className="col col2">
                    <h3>Janet Callaghan, WA, Australia</h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>
                      What a wonderful experience! The two tour leaders who were
                      archaeologists enthralled us with the history of the
                      Islands. The food was bountiful. On the boat the meals
                      were wholesome and delicious. We were treated to wonderful
                      meals on the the Islands that let us sample each Island's
                      speciality. There was free time on each of the Islands
                      that allowed for shopping, exploring or sitting round
                      watching island life sipping a drink!
                    </p>
                    <p>
                      The accommodation on the gulet was more than adequate with
                      rooms being serviced everyday. There was ample deck space
                      to lounge, reading or talking. The staff on the Gulet were
                      lovely and attentive. Excellent.
                    </p>
                  </div>
                  <div className="col col1 first">
                    <div className="image round fit">
                      <a href="generic.html" className="link">
                        <img src="images/pic02.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div>
              <div id="wrapper">
                {this.state.items.map((data, i) => {
                  return (
                    <table>
                      <tbody>
                        <tr>
                          <th>
                            <FindProfile key={i} data={data} />
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  );
                })}
              </div>
            </div>
          </div>
          <footer id="footer">
            <div className="copyright">
              <ul className="icons">
                <li>
                  <a href="#" className="icon fa-facebook">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
        <div id="log">
          <div id="aa1" className="aa2">
            <div className="aa3">
              <span className="close2">&times;</span>
              <Login changeDisplay={this.changeDisplayLogin.bind(this)} />
            </div>
          </div>
        </div>
        <div id="logout">
          <div id="aa4" className="aa5">
            <div className="aa6">
              <span className="close">&times;</span>
              <Signup changeDisplay={this.changeDisplaySignup.bind(this)} />
            </div>
          </div>
        </div>
        <div id="create">
          <div id="aa7" className="aa8">
            <div className="aa9">
              <span className="close1">&times;</span>
              <Edit />
            </div>
          </div>
        </div>
        <div id="search">
          <div id="aa10" className="aa11">
            <div className="aa12">
              <span className="close3">&times;</span>
              <Search />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
