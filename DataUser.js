async function llamado() {
    try {
        const url = "https://jsonplaceholder.typicode.com/users/1"
        const request = await fetch(url)
        if(!request.ok){
            throw new Error("Error en durante la conexion")
        }
        const data = await request.json()
        console.log(data)
        document.getElementById("usrId").textContent = `#0${data.id}`
        document.getElementById("usrName").textContent = data.name
        console.log(data.name)
        document.getElementById("usrUsername").textContent = data.username
        console.log(data.username)
        document.getElementById("usrEmail").textContent = data.email
        console.log(data.email)
        document.getElementById("usrCity").textContent = data.address.city
        console.log(data.address.city)
        document.getElementById("usrWebsite").textContent = data.website
    } catch (error) {
        console.error(error)
    }
    
}
llamado()   