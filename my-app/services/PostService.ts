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

const getPostCommentsById = (postId:number) => {
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
    getPostCommentsById,
    getPostById
  }
  
export default PostService
  

  