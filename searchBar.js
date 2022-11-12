const search = document.querySelector("#searchbar");
const products = document.querySelectorAll("#item");

function searchItems() {
    let text = search.value.toLowerCase();
    products.forEach((product) => {
        if(product.innerText.toLowerCase().includes(text)){
            product.style.display = "block";
        }else {
            product.style.display = "none";
        }
    });
}

search.addEventListener("input", searchItems)