import peliculas from './peliculas.js'

function PelisAccion(pelis, containerID){
    let final;
    const filter_gender = pelis.filter((peli)=>{
        const temp_pelis = peli.genre_ids
        
        for(let n=0;n<temp_pelis.length;n++){
            
            temp_pelis[n] === containerID ? final = true : final = false
            
        }
        return final


    })
    console.log(filter_gender)
}
const accion = PelisAccion(peliculas, 28)
const thriller = PelisAccion(peliculas, 53)
const aventura = PelisAccion(peliculas, 12)

function VerPelis(lista, url){
    lista.filter((lista)=>{
        const enlace = lista.poster_path

    })
}


for (let i=0;i<Accion.length;i++){
    let creaDiv = document.createElement("div")
    let creaImg = document.createElement("img")
    
    creaDiv.setAttribute("Class","foto");
    

}