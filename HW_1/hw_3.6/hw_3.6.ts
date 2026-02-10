
type ProductType = {
    title: string,
    price: number,
    image: string
};

let products: ProductType[] = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://images.cdn.shop.supervalu.ie/1480714001_1'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://rita.com.vn/images/2024/Products/Fruit-juice/Orange-pulp/1.5L_Pet_bottle_Orange_juice_with_Pulp_Drink_Natural.webp'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://foodcare.in/cdn/shop/files/tomatoes-canva.webp?v=1725364526'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://images.ctfassets.net/e8bhhtr91vp3/5Puix2OxmLhbgK55ffiyHy/8ae6037f5d857557e1849f1f5d7b41a4/black_tea_100_tea_bags_front.webp?w=800&q=100'
    }
];

for (const product of products) {
    document.write(`
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <div class="price">₴ ${product.price}</div>                <!-- теперь цена идёт сразу под названием -->
        </div>
        `);
}