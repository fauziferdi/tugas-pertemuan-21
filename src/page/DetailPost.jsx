import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import DetailPostCmp from "../component/DetailPostCmp";
import axios from "axios";

//menggunakan function component dengan useState dan useEffect

export default function DetailPost() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchDataPostById = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataPostById();
  }, [id]);

  return (
    <div className="bg-primary-cstm">
      <Navbar />
      <DetailPostCmp post={post} />
      <Footer />
    </div>
  );
}
