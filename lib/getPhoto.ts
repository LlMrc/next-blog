 async function getAllPhoto(){
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
   if(!res.ok) throw new Error('faild to fetch data')
   const data =  res.json()
   return data
 }

 export default getAllPhoto