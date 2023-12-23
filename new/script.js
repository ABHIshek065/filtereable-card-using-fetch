
async function fetchData() {
    try {
        const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to create product cards based on fetched data
// async function createProductCards() {
//     const productContainer = document.getElementById('productContainer');
//     productContainer.innerHTML = ''; // Clear previous products

//     const data = await fetchData();

//     // data.categories.forEach(cat => {
//     //     const categoryProducts = cat.category_products;
//     //     categoryProducts.forEach(product => {
//     //         const discount = Math.floor(((product.compare_at_price - product.price) / product.compare_at_price) * 100);

//     //         const productCard = document.createElement('div');
//     //         productCard.classList.add('product-card');
//     //         productCard.innerHTML = `
//     //             <img src="${product.image}" alt="${product.title}">
//     //             <h3>${product.title}</h3>
//     //             <p>Vendor: ${product.vendor}</p>
//     //             <p>Price: $${product.price}</p>
//     //             <p>Compare at Price: $${product.compare_at_price}</p>
//     //             <p>${discount}% off</p>
//     //             <button class="add-to-cart">Add to Cart</button>
//     //         `;
//     //         productContainer.appendChild(productCard);
//     //     });
//     // });
// }

// Function to filter products based on category



function filterProducts(category) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear previous products

    fetchData().then(data => {
        data.categories.forEach(cat => {
            if (cat.category_name === category) {
                cat.category_products.forEach(product => {
                    const discount = Math.floor(((product.compare_at_price - product.price) / product.compare_at_price) * 100);

                    const productCard = document.createElement('div');
                    productCard.classList.add('product-card');
                    productCard.innerHTML = `
                   
                  
                        <img class="p-img" src="${product.image}" alt="${product.title}">
                        <div class="productDetails">
                        <div class="titleVendor">
                       <h5 class="title">${product.title}</h5>
                       <p class="vendor"> ${product.vendor}</p> 
                       </div>
                       <div class="priceDetails">
                        <p class="P-price">Price: Rs ${product.price}.00</p>
                        <p class="price"> ${product.compare_at_price}.00</p>
                        <p class="discount">${discount}% off</p>
                        </div>
                        <button class="add-to-cart">Add to Cart</button>
                       <div/>
                      
                    `;



                    productContainer.appendChild(productCard);
                   ;
                });
            }
        });
    });

    // Handle tab button activation
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent === category) {
            button.classList.add('active');
        }
    });
}


filterProducts("Men")
