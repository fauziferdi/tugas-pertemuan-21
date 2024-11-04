import Navbar from "../component/Navbar";
import React, { Component } from "react";
import ListPostCmp from "../component/ListPostCmp";
import Footer from "../component/Footer";
import axios from "axios";

//menggunakan class component biasa

export default class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        this.setState({ posts: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  render() {
    return (
      <div className="bg-primary-cstm">
        <Navbar />
        <ListPostCmp dataPosts={this.state.posts} />
        <Footer />
      </div>
    );
  }
}
