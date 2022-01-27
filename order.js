window.addEventListener("DOMContentLoaded",function(e){
    const order = localStorage.getItem("order");
    if (order){
        const pieOrder = JSON.parse(order);
        const pie = document.querySelector(".pie");
        const title = pie.querySelector(".title");
        const price = pie.querySelector(".price");
        const desc = pie.querySelector(".desc");

        title.innerHTML = pieOrder.title;
        price.innerHTML = pieOrder.price;
        desc.innerHTML = pieOrder.desc;
        const img = pie.querySelector("img");
        img.setAttribute("src", `image/${pieOrder.id}.png`);
        img.setAttribute("alt", pieOrder.title);
    }

        
});