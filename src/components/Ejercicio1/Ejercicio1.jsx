export function Ejercicio1(){

    const handleClick = ()=>{
        alert('Hola, cliqueaste el botón del primer ejercicio.');
    }

    return(
        <button onClick={handleClick}>Cliqueame</button>
    )
}