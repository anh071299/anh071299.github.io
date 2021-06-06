let capitalize = (param, ms) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof(param) == 'string'){
                
                resolve(param.charAt(0).toUpperCase + param.slice(1).toLowerCase());
            }else{
                reject('Loi roi');
            }
        }, ms);
    }).then((param) => console.log('success ' + param))
    .catch((e) => console.log(e));
    
}
console.log(capitalize('122', 2000));