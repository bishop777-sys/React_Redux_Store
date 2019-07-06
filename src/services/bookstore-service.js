
export default class BookstoreService{
    data = [{
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
    getBooks(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(Math.random() > 0.75){
                    reject(new Error("Ошибка"))
                }
                resolve(this.data)
                
            }, 700)
        });
    }
}