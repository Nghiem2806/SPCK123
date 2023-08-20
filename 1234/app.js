let products = {
    data: [
        {
            name: "Cách mạng",
            price: "100.000đ - 200.000đ",
            image: "images/Untitled.png"
        },

        {
            name: "sách hay",
            price: "100.000đ - 200.000đ",
            image: "images/d580ab9c6c3fa961f02e-1.jpg"
        },

        {
            name: "Sách hay",
            price: "780.000đ - 1.470.000đ",
            image:"images/screenshot_2.jpg" 
        },

        {
            name: "Sách hay",
            price: "100.000đ - 200.000đ",
            image:"images/quoc_khanh.jpg" 
        },

       
        
        
           

        
       
    ]
}

for (let items of products.data) {//dùng vòng lặp for để lấy dữ liệu từ mảng

    let card = document.createElement("div")//tạo thẻ div
    card.classList.add("card")//thêm class cho thẻ div

    let imgContainer = document.createElement("div")//tạo thẻ div
    imgContainer.classList.add("image-container")//thêm class cho thẻ div

    let image = document.createElement("img")//tạo thẻ img
    image.setAttribute("src", items.image)//thêm thuộc tính src cho thẻ img
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", "addToCart()")
    btn.innerHTML = "Thêm vào giỏ hàng"
    container.appendChild(btn)
   

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}


//search
document.getElementById("search").addEventListener("click" ,()=>{
    let searchInput = document.getElementById("search-input").value.toUpperCase()
    let cards = document.querySelectorAll(".card")/* lấy tất cả thẻ có class card */
    let productsName = document.querySelectorAll(".product-name")
    // let prices = document.querySelectorAll('h6')

    productsName.forEach((items, index) => {
        if (items.innerText.includes(searchInput)){
            cards[index].classList.remove("hide")
        } else{
            cards[index].classList.add("hide")
        }
    })
});

//cart vào local storage
let cart = []
function addToCart(){
    let name = event.target.parentElement.children[0].innerText //lấy tên sản phẩm
    let price = event.target.parentElement.children[1].innerText //lấy giá sản phẩm
    let image = event.target.parentElement.parentElement.children[0].children[0].getAttribute("src") //lấy ảnh sản phẩm
    let product = { //tạo object
        name: name,
        price: price,
        image: image
    }
    cart.push(product) //thêm object vào mảng cart
    localStorage.setItem("cart", JSON.stringify(cart)) //lưu mảng cart vào local storage
    alert("Thêm vào giỏ hàng thành công")//thông báo
    //cong so luong vào giỏ hàng
    let count = document.getElementById("count")//lấy thẻ có id count
    count.innerText = cart.length//thay đổi số lượng sản phẩm trong giỏ hàng

}


