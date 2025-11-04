import { useEffect, useState } from "react"
import PostService from "@services/PostService"
import { ErrorMessage, Post } from "@types";
import { Searchbar } from "@components/searchbar";
import Link from 'next/link';

const Home: React.FC = () => {

  const [unfilteredPosts,setUnfilteredPosts] = useState<Post[]>([]);
  const [filteredPosts,setFilteredPosts] = useState<Post[]>([]);
  const [filter,setFilter] = useState<string>("");
  const [errorMessage,setErrormessage] = useState<ErrorMessage>();

  const getPosts = async () => {
    const response = await PostService.getAllPosts();
    if (!response.ok){
      setErrormessage({message:"Failed to retrieve data, please try again later."})
      return;
    }
    const parsedPosts:Post[] = await response.json();
    setUnfilteredPosts(parsedPosts);
    setFilteredPosts(parsedPosts);
  }

  useEffect(()=> {
    getPosts();
  },[])
  
  useEffect(()=> {
    setFilteredPosts(unfilteredPosts.filter(post=> post.title.includes(filter)))
  },[filter])

  return (
    <main>
      <Searchbar setInput={setFilter} placeholder={"search post titles"}/>
      {errorMessage && (
        <div>
          <p>{errorMessage.message}</p>
        </div>
      )}
      {!errorMessage && filteredPosts && (
          <ul>
          {filteredPosts.map(post => (
            <li  key={post.id}>
              <p style={{ display: 'inline-flex', margin:"0.5rem"}}>{post.title}</p>
              <Link style={{margin:"0.5rem"}} href={`/post-details/${post.id}`}>
                <button>view</button>
              </Link>
            </li>
          ))}
          </ul>
        )}
        {!errorMessage && filteredPosts.length === 0 && (
          <div>
            <p>no posts found with this name</p>
          </div>
        )}
    </main>
  )
}

export default Home
