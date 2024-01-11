const categories = {
    'Electronics': ['Laptop', 'Smartphone', 'Headphones'],
    'Clothing': ['T-Shirt', 'Jeans', 'Sweater'],
    'Books': ['Science Fiction', 'Mystery', 'Romance']
};

function showProducts(category) {
    const productsContainer = document.getElementById('products');
    const detailsContainer = document.getElementById('details');

    // Clear previous content
    productsContainer.innerHTML = '';
    detailsContainer.innerHTML = '<h2>Product Details</h2>';

    // Display products for the selected category
    categories[category].forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.textContent = product;
        productElement.onclick = () => showProductDetails(product);
        productsContainer.appendChild(productElement);
    });
}

function showProductDetails(product) {
    const detailsContainer = document.getElementById('details');
    detailsContainer.innerHTML = `
        <h2>Product Details</h2>
        <p>${product}</p>
        <button onclick="buyProduct('${product}')">Buy</button>
    `;
}

function buyProduct(product) {
    alert(`Product "${product}" has been purchased.`);
    showProducts(); // Return to the category list
}