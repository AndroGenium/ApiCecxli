// 12iani pls
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    console.log(data)
    for(i = 0; i < data.length; i++){
        let img = data[i].image
        let div = document.createElement("div")
        document.body.appendChild(div)
        let divimg = document.createElement("img")
        div.appendChild(divimg)
        divimg.setAttribute("src", `${img}`)
    }
})

