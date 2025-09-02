const myName = (name= "riya") => {
    try {
        console.log(`my name is ${name}`)
    } catch (error) {
        console.log(error)
    }
}
myName() //deafult parameter
myName("Akshada")