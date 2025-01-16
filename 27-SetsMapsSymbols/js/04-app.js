const producto = {
    idProduct : 10,

}

const weakMap = new WeakMap();

weakMap.set(producto, 'Monitor')


console.log(weakMap.has(producto))
console.log(weakMap.get(producto))


