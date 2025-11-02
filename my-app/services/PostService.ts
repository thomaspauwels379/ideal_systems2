const getAllPosts = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    return fetch(apiUrl + '/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  
const PostService = {
    getAllPosts,
  }
  
  export default PostService
  