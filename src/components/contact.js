import React from "react"

export default () =>(
<form className="mt-16 text-center">
    <label htmlfor="contact-content" className="block text-gray-700 text-sm dont-bold mb-2">Cuentame de esa idea que tienes en mente:</label>
   <div className="flex shadow rounded bg-white border p-2 ">
    <textarea id="contact-content" name="contact-content" className=" flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"></textarea>
    <button className="ml-4 btn bg-purple-500 text-white font-bold rounded border-purple-700 py-2 px-4 border-b-4">Enviar</button>
    </div>
</form>
)