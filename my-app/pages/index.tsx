import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import PostService from "@services/PostService"
import { Post } from "@types";
import { Searchbar } from "@components/searchbar";
import Link from 'next/link';

const Home: React.FC = () => {

  const [unfilteredPosts,setUnfilteredPosts] = useState<Post[]>([]);
  const [filteredPosts,setFilteredPosts] = useState<Post[]>([]);
  const [filter,setFilter] = useState<string>("");

  const getPosts = async () => {
    const response = await PostService.getAllPosts();
    const parsedPosts:Post[] = await response.json();
    setUnfilteredPosts(parsedPosts);
    setFilteredPosts(parsedPosts);
    console.log(parsedPosts)
  }

  useEffect(()=> {
    getPosts();
  },[])

  
  useEffect(()=> {
    setFilteredPosts(unfilteredPosts.filter(post=> post.title.includes(filter)))

  },[filter])

  const router = useRouter();

  return (
    <main className="">
      <Searchbar setInput={setFilter}/>
      <ul>
        {filteredPosts && (
          filteredPosts.map(post => (
            <li key={post.id}>
              <p>{post.title}</p>
              <Link href={"/posts/"}>View</Link>
            </li>
          ))
        )}
      </ul>
    </main>
  )
}

export default Home
