const { pool } = require("./connectDB")

const createDB = async() => {
    sqlCreateDB = 'CREATE DATABASE IF NOT EXIST mavi'
    // return await pool.query(sqlCreateDB, async (err, result, fields) => {
    //     if(err) return await err.message;
    // })
}
const createTable = async () => {
    sqlTable = `
        CREATE TABLE IF NOT EXISTS users (
        id INT(11) NOT NULL AUTO_INCREMENT,
        names VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_general_ci',
        fatherly_surname VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_general_ci',
        maternal_surname VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_general_ci',
        address VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_general_ci',
        email VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_general_ci',
        password VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_general_ci',
        PRIMARY KEY (id) USING BTREE
    )`
    
    return await pool.query(sqlTable, async (err, result, fields) => {
        if(err) return await err.message;
    })
}

const create_user = (dataUser) => {
    const { names, ap_paterno, ap_materno, address, email, password} = dataUser
    return new Promise((resolve, reject) => {
        sql_insert = `INSERT INTO users (names, fatherly_surname, maternal_surname, address, email, password)
                      VALUES ('${names}', '${ap_paterno}', '${ap_materno}', '${address}', '${email}', '${password}')`
        
        pool.query(sql_insert, (err, result, fields) => {
            if(err) return reject(err.message)
            return resolve({"new_id": result.insertId})
        })
    })
}

const update_user = (dataUser) => {
    const { id, names, ap_paterno, ap_materno, address, email, password} = dataUser
    return new Promise((resolve, reject) => {
        sql_update = `UPDATE users SET names = '${names}', 
                            fatherly_surname = '${ap_paterno}', 
                            maternal_surname = '${ap_materno}', 
                            address = '${address}', 
                            email =  '${email}',
                            password =  '${password}'
                        WHERE id = '${id}'`
        
        pool.query(sql_update, (err, result, fields) => {
            if(err) return reject(err.message);
            resolve(result)
        })
    })
}

const delete_user = (dataUser) => {
    const { id, names, ap_paterno, ap_materno, address, email} = dataUser
    return new Promise((resolve, reject) => {
        sql_delete = `DELETE FROM users WHERE id = '${id}'`
        
        pool.query(sql_delete, (err, result, fields) => {
            if(err) return reject(err.message);
            resolve(result)
        })
    })
}

const select_users = (dataUser) => {
    const { id, names, ap_paterno, ap_materno, address, email} = dataUser
    return new Promise((resolve, reject) => {
        let sqlUsers = `SELECT * FROM users WHERE id='${id}'`

        pool.query(sqlUsers, (err, result, fields) => {
            if(err) return reject(err.message)
            if (result == undefined || result.length < 1) return reject("User no find");
          
            let new_data = {
                id: result[0].id,
                names: result[0].names,
                email: result[0].email
            }
        
            resolve(new_data)
        })
    })
}

module.exports = {
    create_user,
    update_user,
    delete_user,
    select_users,
    createTable,
    createDB
}