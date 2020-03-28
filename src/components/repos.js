import React, { useEffect, useState } from "react"
//import repos from "../data/repos.js"
import Repo from "./repo.js"
export default () =>{

    const [repos,setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([])

    useEffect ( () => {
        
        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
         myRepos = JSON.parse(data);
            setReposCount(myRepos.length);

         myRepos = myRepos.slice(1,13)
        return setRepos(myRepos); 
    }
         async function fetchRepos(){
            const response = await  fetch("https://api.github.com/users/codigofacilito/repos")
            myRepos = await response.json();
            setReposCount(myRepos.length);

            sessionStorage.setItem("repos",JSON.stringify(myRepos));


              setRepos(myRepos);
          }



         fetchRepos();
        
    },[])

        return(
    <div className="max-w-4xl mx-auto pt-8">
        <header className="text-center">
        <h2 className="text-3xl font-sold font-bold">Mi trabajo en Open Source</h2>
        <p>Colaboracion y contribucion de codigo</p>
        </header>

        <ul className="repos-list p-4">
            { 
            repos.map((repo)=>{
            return <Repo repo={repo} key = {repo.id}/>
            })
            }
        </ul>
            <div className="mt-8 text-center">
        <a href="https://github.com/casnet1"  target="_blank" rel="noopener noreferrer" className="bg-purple-500 text-white font-bold rounded border-purple-700 py-2 px-4 border-b-4">Ver mas en github {reposCount}</a>

            </div>
    </div>
        );
}