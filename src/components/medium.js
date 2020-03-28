import React, { useState, useEffect } from 'react'
//import Post from './post'


export default ()=>{

        const [posts,setPosts] = useState([]);
       
        useEffect(()=>{
            const data= sessionStorage.getItem('posts');
            if(data){
                setPosts(JSON.parse(data))
            }
            let myPosts;

            async function getMediumPost(){
                const response = await fetch ("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss")
                myPosts = await response.json()
                sessionStorage.setItem('posts',JSON.stringify(myPosts.items))
                setPosts(myPosts.items)
                console.log(myPosts.items)
            }
            getMediumPost()


        },[]);




        const postss = posts.map((posts)=>(
            <div className="shadow  bg-white mr-4 rounded flex-shrink-0" style={{width:"300px"}}>
            <header className="h-40 bg-cover bg-center" style={{backgroundImage:`url(${posts.enclosure.link})`}}></header>
        <div className="p-8">
        <h4 className="font-bold h-40 overflow-y-hidden"> {posts.title}</h4>
        <div className="text-center mt-8">
        <a href={posts.link} target="_blank" rel="noopener noreferrer">Leer</a>
        </div>
        </div>
            </div>

        ));


        return(
            <div>
            <h2 className="text-3xl font-bold text-center pt-16">Mis publicaciones en Medium </h2>
            <div className="flex mt-8 max-w-4xl mx-auto overflow-x-scroll ">
            
            {postss}
        
           
           
           
           
            </div>
            </div>


            
        );
}