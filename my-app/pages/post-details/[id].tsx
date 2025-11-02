import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import PostService from "@services/PostService"
import { Post } from "@types";
import { Searchbar } from "@components/searchbar";
import Link from 'next/link';

const Home: React.FC = () => {

  const [comments,setComments] = useState<Comment[]>([]);
  const [postId,setPostId] = useState<number|null>(null);
  const [post,setPost] = useState<Post|null>(null);

  const getPostComments = async () => {
    const response = await PostService.getPostCommentsById(1);
    const parsedComments:Comment[] = await response.json();
    setComments(parsedComments);
  }
  
  const getPost = async () => {
    const response = await PostService.getAllPosts();
    const parsedPosts:Post[] = await response.json();
    if(parsedPosts.filter(post => post.id === postId).length){
        const post:Post = parsedPosts.filter(post => post.id === postId)[0]
        setPost(post);
    }
  }

    useEffect(()=> {
        getPost();
        getPostComments();
    },[])
  
  const router = useRouter();

  return (
    <main className="">
        <Link href={"/"}>Close</Link>
    </main>
  )
}

export default Home
