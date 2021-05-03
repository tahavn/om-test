const MOCK_BD = {
    products: {
        products: [
            {
                "id": "ec2e1016b98bf",
                "img": "http://pngimg.com/uploads/guitar/guitar_PNG3350.png",
                "name": "TAKAMINE",
                "price": 2000,
                "quantity": 1
            },
            {
                "id": "9fbec80e45172",
                "img": "http://pngimg.com/uploads/guitar/guitar_PNG3369.png",
                "name": "Fender",
                "price": 2000,
                "quantity": 1
            },
        ],
        loading: false,
        error: null
    },
    cart: {
        cartItems: [
            {
                "id": "ec2e1016b98bf",
                "img": "http://pngimg.com/uploads/guitar/guitar_PNG3350.png",
                "name": "TAKAMINE",
                "price": 2000,
                "quantity": 1,
                "priceOne": 2000
            },
            {
                "id": "9fbec80e45172",
                "img": "http://pngimg.com/uploads/guitar/guitar_PNG3369.png",
                "name": "Fender",
                "price": 2000,
                "quantity": 1,
                "priceOne": 2000
            },
        ],
        orderTotal: 0,
        priceTotal: 0,
    }
}

export default MOCK_BD;