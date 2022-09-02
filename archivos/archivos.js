const fs = require('fs')


console.clear()

class Contenedor {
    constructor(file){
        this.file = file
        this.products = []      
    }

    save = async (product) => { 
        try{
            const id = this.products.length > 0 ? product.id = this.products.length + 1 : product.id = 1       
            this.products.push(product)
            fs.writeFileSync(this.file, JSON.stringify(this.products))
            
                  
            return id

        }
        catch{
            return console.log('Se produjo un error')

        }        
    }

    getById = (id) => {
        const productId = this.products.find(product => {
            return product.id === id
        })
        if(productId){
            console.log(productId)
            return productId
        }else{
            return null
        }
    }

    getAll(){
        const auxArray = this.products.map(product => product)
        return auxArray
    }

    deleteById = (id) => {
        const deleteProduct = this.products.filter(product => {
            return product.id !== id
        })
        if(deleteProduct){            
            
            fs.promises.writeFile(`./${this.file}`, JSON.stringify(deleteProduct)).then(data => console.log(deleteProduct))            
        }    

    }

    getRandomProduct = () => {
        let randomNum = Math.ceil(Math.random()*3)
        return this.getById(randomNum)        
    }

    deleteAll = () => {
        fs.unlinkSync(this.file)
    }    
    
}

const producto = new Contenedor('./productos.txt')


producto.save({title: 'Mancuerna', price:'2500'})
producto.save({title: 'Proteina', price:'2300'})
producto.save({title: 'Barra', price:'4300'})

// producto.getById(3)
// producto.getAll()
// producto.deleteAll()
// producto.deleteById(1)
// mancuerna.getAll('./productos.txt')


module.exports = producto