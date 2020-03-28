import React from "react"
import Hero from "../img/hero2.svg"
import Form from "./contact.js"


export default () => (
<header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-4xl">
        <div className="flex justify-center items-center">
            <div className="flex-1">
                <h1 className=" font-bold text-purple-700 text-6xl">¡Hola! Soy Eithan</h1>
                <p className="text-xl">Creo aplicaciones web y robots inteligentes jejeje </p>
            </div>
            <img src={Hero} alt="Hero" style={{height: "300px"}} ></img>
        </div>

        <div>
            <Form />
        </div>
    </div>
</header>


)