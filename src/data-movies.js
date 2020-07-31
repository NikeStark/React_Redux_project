const dataMovies = [
        {
            id: 1,
            title: 'King Arthur',
            year: '2010'
        },
        {
            id: 2,
            title: 'Terminator',
            year: '2003'
        },
        {   
            id: 3,
            title: 'Adventures',
            year: '2012'
        },
        {   
            id: 4,
            title: 'Water is cold',
            year: '2008'
        },
        {   
            id: 5,
            title: 'Art artificial human',
            year: '1999'
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