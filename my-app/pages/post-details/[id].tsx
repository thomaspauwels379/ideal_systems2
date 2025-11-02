import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import PostService from "@services/PostService"
import { Post } from "@types";
import { Searchbar } from "@components/searchbar";
import Link from 'next/link';

const Home: React.FC = () => {

  const [comments,setComments] = useState<Comment[]>([]);

  const getPostComments = async () => {
    const response = await PostService.getPostCommentsById(1);
    const parsedComments:Comment[] = await response.json();
    setComments(parsedComments);
  }
  

  const router = useRouter();

  return (
    <main className="">
    </main>
  )
}

export default Home
