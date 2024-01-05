export function Ejercicio3(){

    const handleChange = (e)=>{
        console.log(e.target.value);
    }

    
    return(
        <input type="text" placeholder="Escriba algo" onChange={handleChange}/>
    );
}