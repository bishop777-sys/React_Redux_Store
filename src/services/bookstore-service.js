
export default class BookstoreService{
    getBooks(){
        return[{
            id: 1, 
            name: 'Production-Ready Microservices',
            author: 'Alex',
            price: 950,
            coverImage: 'https://cdn1.ozone.ru/multimedia/c1200/1023917780.jpg'
        },
        { 
            id: 2, 
            name: 'Python for begginer',
            author: 'Michal',
            price: 150,
            coverImage: 'https://cdn1.ozone.ru/multimedia/c1200/1023917780.jpg'
        }
    ];
    }
}