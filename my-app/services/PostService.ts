const getAllPosts = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  return fetch(apiUrl + '/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const getPostById = (postId:string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  return fetch(apiUrl + `/posts/${postId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const getPostCommentsByPostId = (postId:number) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  return fetch(apiUrl + `/posts/${postId}/comments`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
  
const PostService = {
    getAllPosts,
    getPostCommentsByPostId,
    getPostById
  }
  
export default PostService
  

  