const dataMovies = [
        {
            id: 1,
            title: 'King Arthur'
        },
        {
            id: 2,
            title: 'Terminator'
        },
        {   
            id: 3,
            title: 'Adventures'
        }
    ]

   export const getMovies = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() > 0.85 ? 
                    setTimeout(() => {
                        reject(new Error('Please, pay attantion.. Somewhere is error!'));
                    }, 5000)    
                : resolve(dataMovies, console.log('Data with movies was received!!!'));   
            }, 2000)
        })
    }