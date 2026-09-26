const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function searchProducts() {

    const searchText = searchInput.value.toLowerCase().trim();

    const products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const productText = product.innerText.toLowerCase();

        if (productText.includes(searchText)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });

}


searchButton.addEventListener("click", searchProducts);


searchInput.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        searchProducts();
    }

});
