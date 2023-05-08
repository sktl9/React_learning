import React,{useState} from "react";
import Counter from "./compoments/Counter";
import './styles/App.css'
import PostItem from "./compoments/PostItem";
import PostList from "./compoments/PostList";
import MyButton from "./compoments/UI/button/MyButton";
import MyInput from "./compoments/UI/button/input/MyInput";

function App() {
  const [posts,setPosts] = useState([
    {id:'1.',title:'javascript',body:'Describtion'},
    {id:'2.',title:'javascript 2',body:'Describtion'},
    {id:'3.',title:'javascript 3',body:'Describtion'}
  ])
 

  const [title,setTitle] = useState('')

  const addNewPost = ()=> {

  }

  return ( 
    <div className="App">
      <form>
        <MyInput
         value={title}
         onChange={e=> setTitle(e.target.value)}
         type="text"
         placeholder="Название поста"
        />
        <MyInput type="text" placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
     <PostList posts = {posts} title ='Посты про JS '/>
    </div>

  );
}

export default App;
