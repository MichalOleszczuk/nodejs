module.exports = this.x || (()=>{
    console.log('Witaj! Wyswietle sie raz, ale nie jestem singletonem :(')
    setTimeout(()=>console.log('OKLAMALEM CIE!! JESTEM PODLYM SINGLETONEM!!! X1 jest inna instancja!!'), 0)
    return this.x = null
})()