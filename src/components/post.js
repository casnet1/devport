
import React from 'react'



export default (props)=>{
 const post = props.element;
 console.log(post)
return(<p>hola</p>)
 /*return(
  <div className="shadow  bg-white mr-4 rounded flex-shrink-0" style={{width:"300px"}}>
    <header className="h-40 bg-cover bg-center" style={{backgroundImage:`url(${post.image})`}}></header>
  <div className="p-8">
  <h4 className="font-bold h-40 overflow-y-hidden"> {post.title}</h4>
  <div className="text-center mt-8">
  <a href={post.link} target="_blank" rel="noopener noreferrer">Leer</a>
    </div>
    </div>
    </div>
 );*/
}