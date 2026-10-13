async function llamado() {
    try {
        const url = "https://dog.ceo/api/breeds/image/random"
        const request = await fetch(url)
        if(!request.ok){
            throw new Error("Error en durante la conexion")
        }
        const data = await request.json()
        console.log(data)
        document.getElementById("dogImage").src = data.message
        console.log(data.message)
        document.getElementById("dogLink").textContent = data.message
        document.getElementById("dogStatus").textContent = data.status
        console.log(data.status)

        // Extrae la raza desde la URL de la imagen (ej: /breeds/pug/...)
        const partes = data.message.split("/breeds/")[1]
        const raza = partes ? partes.split("/")[0] : "desconocida"
        document.getElementById("dogBreed").textContent = raza.toUpperCase()
        document.getElementById("dogTitle").textContent = `Perro: ${raza}`
        console.log(raza)
    } catch (error) {
        console.error(error)
    }

}

llamado()
document.getElementById("btnRecargar").addEventListener("click", llamado)
