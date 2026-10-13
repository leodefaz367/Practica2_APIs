async function llamado() {
    try {
        const url = "https://fakestoreapi.com/products/16"
        const request = await fetch(url)
        if(!request.ok){
            throw new Error("Error en durante la conexion")
        }
        const data = await request.json()
        console.log(data)
        document.getElementById("prdId").textContent = `#${data.id}`
        document.getElementById("prdImage").src = data.image
        console.log(data.image)
        document.getElementById("prdTitle").textContent = data.title
        console.log(data.title)
        document.getElementById("prdCategory").textContent = data.category
        console.log(data.category)
        document.getElementById("prdPrice").textContent = `$${data.price}`
        console.log(data.price)
        document.getElementById("prdDescription").textContent = data.description
        console.log(data.description)
        document.getElementById("prdRating").textContent = data.rating.rate
        console.log(data.rating.rate)
        document.getElementById("prdCount").textContent = data.rating.count
        console.log(data.rating.count)
    } catch (error) {
        console.error(error)
    }

}
llamado()
