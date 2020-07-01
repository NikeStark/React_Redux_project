export const serviceAuth = (name, password) => {
    return new Promise((resolve, reject) => {
        if(name === 'Aliaksandr' && password === '131093'){ 
            resolve(name, password) 
       } else {
            reject(new Error('Incorrect user data!'))
       } 
    })
}