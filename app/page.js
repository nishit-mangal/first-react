"use client";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Link from "next/link";
import axios from "axios";

const page = () => {
  // const [user, setUser] = useState("Default User");
  const [images, setImages] = useState([]);

  const getImages = async () => {
    console.log("Clicked");
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log("API respone", response);
    const data = response?.data;
    console.log("data", response.data);
    setImages(data);
  };
  useEffect(() => {
    console.log("updated Images", images);
  }, [images]);

  return (
    <div>
      {/* <h1>This is home page</h1>
      <div>{user}</div> */}
      <button onClick={getImages}>Get Images</button>
      <div>
        {images.map((element, i) => {
          console.log("ids in images", element?.id);
          if (element.download_url) {
            return (
              <img 
                key={i}
                src={element.download_url} 
                className="Image"
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default page;
