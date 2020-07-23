import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { auth } from "../services/firebase";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
    };
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <section>
          User email:<p>{this.state.user.email}</p>
          UID:<p>{this.state.user.uid}</p>
        </section>
        <Footer/>
      </div>
    )
  }
}
