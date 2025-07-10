import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
    const data = useLoaderData() // useLoaderData is a hook that returns the data returned by the loader function
    // const [data,setData] =useState([])
    // useEffect(()=>{
    //     fetch('https://api/github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])
  return (
    <div className='text-center text-3xl font-bold mt-10'>
      GitHub Followers: {data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
    
  )
}

export default GitHub;

export const githubInfoLoader = async ()=>{
  const response= await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}
