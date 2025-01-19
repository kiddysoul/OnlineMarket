const products = [
    {
        id: 1,
        title: 'Lego Star Wars Troopers',
        price: '2 300р',
        image: 'img/lego1.jpg'
    },
    {
        id: 2,
        title: 'Lego Star Wars',
        price: '5 600р',
        image: 'img/lego2.jpg',
    },
    {
        id: 3,
        title: 'Lego Star Wars',
        price: '14 400р',
        image: 'img/lego3.webp',
    },
    {
        id: 4,
        title: 'Lego Star Wars',
        price: '23 780р',
        image: 'img/lego4.jpg',
    },
    {
        id: 5,
        title: 'Lego Star Wars',
        price: '4 600р',
        image: 'img/lego5.jpg',
    },
    {
        id: 6,
        title: 'Lego Star Wars',
        price: '4 580р',
        image: 'img/lego6.jpg',
    },
    {
        id: 7,
        title: 'Lego Star Wars',
        price: '19 200р',
        image: 'img/lego7.jpg',
    },
    {
        id: 8,
        title: 'Lego Star Wars',
        price: '2000',
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
        price: '2000',
        image: 'img/lego-marvel1.jpeg',
    },
    {
        id: 11,
        title: 'Lego Marvel Iron Man',
        price: '2000',
        image: 'img/lego-marvel2.jpeg',
    },
    {
        id: 12,
        title: 'Lego Marvel Ghost runner',
        price: '2000',
        image: 'img/lego-marvel3.jpeg',
    },
    {
        id: 13,
        title: 'Lego Marvel Avengers',
        price: '2000',
        image: 'img/lego-marvel4.jpeg',
    },
    {
        id: 14,
        title: 'Lego Ninjago dragon rising',
        price: '2000',
        image: 'img/lego-ninjago1.jpg',
    },
    {
        id: 15,
        title: 'Lego Ninjago Jay',
        price: '2000',
        image: 'img/lego-ninjago2.jpg',
    },
    {
        id: 16,
        title: 'Lego Ninjago Master',
        price: '2000',
        image: 'img/lego-ninjago3.jpg',
    },
    {
        id: 17,
        title: 'Lego Ninjago Sonic Rider',
        price: '2000',
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