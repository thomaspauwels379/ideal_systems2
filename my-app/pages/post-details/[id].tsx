import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import PostService from "@services/PostService"
import { ErrorMessage, Post, Comment } from "@types";
import Link from 'next/link';

const Home: React.FC = () => {

  const router = useRouter();
  const { id: postId } = router.query;
  const [comments,setComments] = useState<Comment[]>([]);
  const [post,setPost] = useState<Post|null>(null);
  const [errorMessage,setErrormessage] = useState<ErrorMessage>();

  const getPostComments = async () => {
    const response = await PostService.getPostCommentsById(1);
    if (!response.ok){
      setErrormessage({message:"Failed to retrieve data, please try again later."})
      return;
    }
    const parsedComments:Comment[] = await response.json();
    setComments(parsedComments);
  }
  
  // const getPost = async () => {
  //   const response = await PostService.getAllPosts();
  //   if (!response.ok){
  //     setErrormessage({message:"Failed to retrieve data, please try again later."})
  //     return;
  //   }
  //   const parsedPosts:Post[] = await response.json();
  //   const post = parsedPosts.find(post => post.id as any as string == postId)
  //   if(post){
  //     setPost(post);
  //   }
  //   else{
  //     setErrormessage({message:"Failed to find this post."})
  //   }
  // }

  // gevonden maar stond niet in de handleiding die werd meegegeven

  const getPostById = async () => {
    const response = await PostService.getPostById(postId as string);
    if (!response.ok){
      setErrormessage({message:"Failed to retrieve data, please try again later."})
      return;
    }
    const parsedPost:Post = await response.json();
    setPost(parsedPost);
  }

  useEffect(()=> {
    // kijkt of de router geladen is, zodat de id beschikbaar is van de post uit de url
    if (!router.isReady) return;

    getPostById();
    // getPost();
    getPostComments();

  },[router.isReady])

  return (
    <main className="">
        <Link href={"/"}>Close</Link>
        {errorMessage && (
          <div>
            <p>{errorMessage.message}</p>
          </div>
        )}
        {!errorMessage && post && comments && (
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <div>
              <h2>Comments</h2>
              <ul>
                {comments.map(comment => 
                  <li key={comment.id}>{comment.body}</li>
                )}
              </ul>
            </div>
          </div>
        )}
    </main>
  )
}

export default Home
