import { useState } from "react";

export function Ejercicio2(){

    const handleChange = (e)=>{
        alert(e.target.value);
    }

    return (
        <select name="coding_language" onChange={handleChange}>
            <option value="react">React</option>
            <option value="php">PHP</option>
            <option value="c#">C#</option>
            <option value="python">Python</option>
            <option value="angular">Angular</option>
        </select>
    )
}