document.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.getElementById('products');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart-btn');

    let products = [
        { id: 1, name: 'Produto A', price: 10.00 },
        { id: 2, name: 'Produto B', price: 20.00 },
        { id: 3, name: 'Produto C', price: 15.00 }
    ];

    let cart = loadCartFromLocalStorage();

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function loadCartFromLocalStorage() {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    }

    function renderProducts() {
        productsSection.innerHTML = '<h2>Produtos Disponíveis</h2>';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
            productElement.innerHTML = `
                <span>${product.name} - R$ ${product.price.toFixed(2)}</span>
                <button data-id="${product.id}">Adicionar ao Carrinho</button>
            `;
            productsSection.appendChild(productElement);
        });

        productsSection.querySelectorAll('.product-item button').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = parseInt(event.target.dataset.id);
                addProductToCart(productId);
            });
        });
    }

    function addProductToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingCartItem = cart.find(item => item.id === productId);
            if (existingCartItem) {
                existingCartItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            saveCartToLocalStorage();
            renderCart();
        }
    }

    function removeProductFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCartToLocalStorage();
        renderCart();
    }

    function updateProductQuantity(productId, change) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeProductFromCart(productId);
            } else {
                saveCartToLocalStorage();
                renderCart();
            }
        }
    }

    function calculateCartTotal() {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        } else {
            cart.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item');
                cartItemElement.innerHTML = `
                    <div class="cart-item-info">
                        <span>${item.name} - R$ ${item.price.toFixed(2)}</span>
                        <span>Quantidade: ${item.quantity}</span>
                    </div>
                    <div class="cart-item-quantity">
                        <button data-id="${item.id}" data-action="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button data-id="${item.id}" data-action="increase">+</button>
                        <button data-id="${item.id}" data-action="remove" class="remove">Remover</button>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItemElement);
            });

            cartItemsContainer.querySelectorAll('.cart-item-quantity button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = parseInt(event.target.dataset.id);
                    const action = event.target.dataset.action;

                    if (action === 'decrease') {
                        updateProductQuantity(productId, -1);
                    } else if (action === 'increase') {
                        updateProductQuantity(productId, 1);
                    } else if (action === 'remove') {
                        removeProductFromCart(productId);
                    }
                });
            });
        }
        cartTotalSpan.textContent = calculateCartTotal().toFixed(2);
    }

    function clearCart() {
        cart = [];
        saveCartToLocalStorage();
        renderCart();
    }

    clearCartButton.addEventListener('click', clearCart);

    // Initial render
    renderProducts();
    renderCart();
});
