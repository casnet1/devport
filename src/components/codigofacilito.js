import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      codfacJson {
        data {
          courses {
            progress
            title
            url
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <section>
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
        
            <h2 className="text-3xl font-bold text-center">Mis cursos online en codigoFacilito</h2>
            <div className="flex mt-8 max-w-4xl mx-auto overflow-x-scroll ">
              {data.codfacJson.data.courses.map(cursos => (
                 // function(cursos){
               // if(parseInt(cursos.progress) != 0){
                   // return(
                        <div className="shadow p-8 bg-white mr-4 rounded">
                        <h4 className="font-bold text"> <a href={cursos.url} target="_blank" rel="noopener noreferrer">{cursos.title}</a> </h4>
                        <div className="text-center">
                   <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">progreso: {parseInt(cursos.progress)}%</span>
                         </div>
                         </div>
                   // )
               // }
               // }
              
              ))}
            </div>
          
        </div>
      </div>
    </section>
  )
}
