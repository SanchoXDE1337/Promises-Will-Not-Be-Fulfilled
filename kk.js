let pr = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let num = Math.random();
        num > 0.5 ? resolve(num) : reject(`${num} < 0.5`);
    }, 1000);
});
pr.then( (num) => {
    console.log(num);
}, (err) => {
    throw new Error(err);
});


const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
};
delay(5000).then( () =>{
    console.log('All good!')
});

