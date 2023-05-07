import React,{useState} from "react";
import Counter from "./compoments/Counter";
import './styles/App.css'
import PostItem from "./compoments/PostItem";
import PostList from "./compoments/PostList";

function App() {
  const [posts,setPosts] = useState([
    {id:'1.',title:'javascript',body:'Describtion'},
    {id:'2.',title:'javascript 2',body:'Describtion'},
    {id:'3.',title:'javascript 3',body:'Describtion'}
  ])
  const [posts2,setPosts2] = useState([
    {id:'1.',title:'php',body:'Describtion'},
    {id:'2.',title:'php 2',body:'Describtion'},
    {id:'3.',title:'php 3',body:'Describtion'}
  ])
  return ( 
    <div className="App">
     <PostList posts = {posts} title ='список постов 1 '/>
     <PostList posts = {posts2} title ='список постов 2 '/>
    </div>

  );
}

export default App;
