const pool = require('./pool.js')


async function getAllProducts(){
    const rows = await pool.query("SELECT * FROM product")
    return rows 
}

async function getSpecCatgorie(categorie){
    const rows = await pool.query("SELECT * FROM product categorie WHERE product.idCategorie = categorie.id and categorie.nom = ($1)" , [categorie])
    return rows
}

async function getSpecProduct(product) {
    const row = await pool.query("SELECT * FROM product WHERE name = ($1)", [product])    
    return row
}