import Navbar from "./navbar";
import React, { Component } from "react";
import ListPostCmp from "./ListPostCmp";
import Footer from "./Footer";
import axios from "axios";

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
