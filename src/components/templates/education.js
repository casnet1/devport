import React from 'react'
import { graphql, Link } from 'gatsby'
import Nav from "../education.nav.js"

export default (props) =>{
   const pageData = props.data.educationJson;
    return(
        <div>
            <header className="py-12 border-purple-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
           <Link to="/" className="uppercase underline text-pink-500">Regresar al inicio</Link>
           
            <h1 className="capitalize text-6xl font-bold">{pageData.title}</h1>
              <p className="text-xl">{pageData.description}</p>
            </div>
            </header>
            
            <ul className="max-w-4xl mx-auto">
                {
                    pageData.items.map( (item,index)=>(
                        <li className="bg-white shadow mt-4 flex" key={index}>
                            <p class="vertical-text" className="bg-blue-200 text-purple-700 text-xs p-2 inline-block">{pageData.slug}</p>
                            <div className=" flex intems-center flex-1 p-8">
                                <div className="flex-1">
                                 <h3>{item.name}</h3>
                                 {
                                     item.degree && <span className="inline-block p-2 radius bg-purple-100 text-purple-700">{item.degree}</span>
                                 }
                                 {
                                     item.url && <a href={item.url} target="_blank" rel="noopener noreferrer" className="bg-purple-500 text-white font-bold rounded border-purple-700 py-2 px-4 border-b-4 mt-4 inline-block">Ver mas</a>
                                 }

                                </div>
                                <div className="inline-block">
                                    <span className="inline-block p-2 text-2xl bg-green-100 text-green-700">{item.score}</span>
                                </div>

                            </div>
                        </li>

                    ))
                }

            </ul>

            <Nav />
        </div>
        
    )
}
export const query = graphql`
query($slug : String){
    educationJson(slug:{ eq:$slug}){
        title
        description
        slug
        items{
            name
            degree
            score
            url
        }
    }
}
`;







