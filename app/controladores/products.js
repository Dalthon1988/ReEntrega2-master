const ProductManager = require('../../ProductManager.js')
const productManager = new ProductManager("./datos.json")

exports.getData = async (req, res) =>{
    

    const product = await productManager.getProducts()
    res.send(product)



   // res.send ({data:"Esto viene desdee RUTA"})


}