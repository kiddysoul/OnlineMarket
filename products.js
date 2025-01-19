const products = [
    {
        id: 1,
        title: 'Lego Star Wars Troopers',
        price: '2 300 р',
        image: 'img/lego1.jpg'
    },
    {
        id: 2,
        title: 'Lego Star Wars',
        price: '5 600 р',
        image: 'img/lego2.jpg',
    },
    {
        id: 3,
        title: 'Lego Star Wars',
        price: '14 400 р',
        image: 'img/lego3.webp',
    },
    {
        id: 4,
        title: 'Lego Star Wars',
        price: '23 780 р',
        image: 'img/lego4.jpg',
    },
    {
        id: 5,
        title: 'Lego Star Wars',
        price: '4 600 р',
        image: 'img/lego5.jpg',
    },
    {
        id: 6,
        title: 'Lego Star Wars',
        price: '4 580 р',
        image: 'img/lego6.jpg',
    },
    {
        id: 7,
        title: 'Lego Star Wars',
        price: '19 200 р',
        image: 'img/lego7.jpg',
    },
    {
        id: 8,
        title: 'Lego Star Wars',
        price: '3 400 р',
        image: 'img/lego8.jpg',
    },
    {
        id: 9,
        title: 'Lego Heroika',
        price: 'Нет в наличии',
        image: 'img/lego-heroika.jpg',
    },
    {
        id: 10,
        title: 'Lego Marvel Spiderman final fight',
        price: '14 970 р',
        image: 'img/lego-marvel1.jpeg',
    },
    {
        id: 11,
        title: 'Lego Marvel Iron Man',
        price: '8 560 р',
        image: 'img/lego-marvel2.jpeg',
    },
    {
        id: 12,
        title: 'Lego Marvel Ghost runner',
        price: '3 450 р',
        image: 'img/lego-marvel3.jpeg',
    },
    {
        id: 13,
        title: 'Lego Marvel Avengers',
        price: '5 600 р',
        image: 'img/lego-marvel4.jpeg',
    },
    {
        id: 14,
        title: 'Lego Ninjago dragon rising',
        price: '7 560 р',
        image: 'img/lego-ninjago1.jpg',
    },
    {
        id: 15,
        title: 'Lego Ninjago Jay',
        price: '2 230 р',
        image: 'img/lego-ninjago2.jpg',
    },
    {
        id: 16,
        title: 'Lego Ninjago Master',
        price: ' 6 700 р',
        image: 'img/lego-ninjago3.jpg',
    },
    {
        id: 17,
        title: 'Lego Ninjago Sonic Rider',
        price: '4 500 р',
        image: 'img/lego-ninjago4.jpg',
    },
];

// Функция для добавления продуктов в DOM
function renderProducts() {
    const productCardContainer = document.getElementById('product-card');

    if (productCardContainer) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image" />
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <button class="addToCardButton">В корзину</button>
            ` ;
            productCardContainer.appendChild(productCard);
        });
    } else {
        console.error('Элемент с ID "product-card" не найден.');
    }
}

// Вызов функции рендеринга продуктов
renderProducts();