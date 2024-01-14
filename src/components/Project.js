import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Project.css";
import BlogPost from "../images/BlogPost.png"
import todolist from "../images/todolist.png";
import ProjectItem from "./ProjectItem";
import netflixGPT from "../images/netflixgpt.png"
import weather from "../images/weatherapp.png"
import cart from "../images/cart.png"


const projects = [
  {
    photo: BlogPost,
    title: "Blog Post",
    des: "Blog Post offers user-friendly authentication for login and signup. Once logged in, users can create, edit, and delete their blog posts, fostering a seamless content management experience. This application empowers users to share their thoughts and easily manage their blog content within a user-friendly interface.",
    githubLink: "https://github.com/shubham05116/blogpost/",
  },
 
  {
    photo: netflixGPT,
    title: "Netflix GPT",
    des: "The Netflixgpt project aims to replicate the core features and user interface of the popular streaming platform Netflix using the ReactJS library. This project will allow users to browse, search, and watch a collection of movies and TV shows in a visually appealing and user-friendly interface.",
    githubLink: "https://github.com/shubham05116/netflixgpt",
  },
  {
    photo: weather,
    title: "Weather App",
    des: "This is Weather web app in which you can watch weather of your city and also search for the weather you are interested in.This is a User friendly interface that allows you to search for weather information on your browser.",
    githubLink: "https://github.com/shubham05116/climaticy",
  },
  {
    photo: todolist,
    title: "Todo List",
    des: "Simple Todo List with beautiful UI and provides features like Add task , Remove task and Move Tasks Up and Down. Techstack used React.js ",
    githubLink: "https://github.com/shubham05116/React-JS-Projects/tree/main/todo-app",
  },
  {
    photo: cart,
    title: "Shopping Cart",
    des: "This is Shopping website where ser can add what they like. I have used Redux for state management here.",
    githubLink: "https://github.com/shubham05116/React-JS-Projects/tree/main/ShoppingCart",
  },
];
export default function Project() {
  const [items, setItems] = useState([]);
  const [visible, setVisibe] = useState(3);

  const showMoreItems = () => {
    setVisibe((prevValue) => prevValue + 3);
  };
  const showLessItems = () => {
    if (visible === 3) return;

    if (visible >= 4 && visible <= 6) {
      setVisibe(3);
      return;
    }
    setVisibe(6);
  };
  useEffect(() => {
    setItems(projects);
  });
  // console.log(items);
  return (
    <div>
      <div className="Project ">
        <h1>PROJECTS</h1>
        <div className="project_container">
          {items.slice(0, visible).map((items) => (
            // console.log(items);
            <ProjectItem item={items} />
          ))}
        </div>
        <div className="showbtn">
          <button onClick={showMoreItems}>Load More </button>
        </div>
      </div>
    </div>
  );
}
