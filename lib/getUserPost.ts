async function getPost(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if(!res.ok) throw new Error('faild to fatch data')

    const data = res.json()
  
  return data
}

export default getPost