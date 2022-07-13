const database = require("../config/db.js");
const mysql = require("mysql");
const pool = mysql.createPool(database);

pool.on("error", (err) => {
    console.log("err");
});

let listData = {
    ambilData(req, res){
        pool.getConnection((err, connection) => {
            if(err){
                console.log("ERROR");
            }
        const query = "SELECT * FROM complete";
        connection.query(query, (err, result) => {
            if(err){
                console.log("ERROR");
            }

        res.send({ data: result });

        });
        connection.release();
        })
    },
    createData(req, res){
        pool.getConnection((err, connection) => {
            if(err){
                console.log("ERROR");
            }
        let inputJudul = req.body.judul;
        let inputPenulis = req.body.penulis;
        let inputTahun = req.body.tahun;
        const query = "INSERT INTO complete (judul, penulis, tahun) VALUES ('"+ inputJudul +"', '"+ inputPenulis +"', '"+ inputTahun +"')"; //insert harus ambil data dari frontend
        connection.query(query, (err, result) => {
            if(err){
                console.log("ERROR");
            }

        res.send({ data: result });

        });
        connection.release();
        })
    },
    dellData(req, res){
        pool.getConnection((err, connection) => {
            if(err){
                console.log("ERROR");
            }
        let dellId = req.params.id; //cari input data dari frontend dengan id
       
        const query = "DELETE FROM complete WHERE id = '"+ dellId +"'";
        connection.query(query, (err, result) => {
            if(err){
                console.log("ERROR");
            }

        res.send({ data: result }); //ini adalah text yg akan ditampilkan pada user

        });
        connection.release();
        })
    },
    updateData(req, res){
        pool.getConnection((err, connection) => {
            if(err){
                console.log("ERROR");
            }
        
            let inputJudul = req.body.judul;
            let inputPenulis = req.body.penulis;
            let inputTahun = req.body.tahun;
            let inputId = req.params.id; //cari input data dari frontend dengan id
       
        const query = "UPDATE complete SET judul = '"+ inputJudul +"', penulis = '"+ inputPenulis +"', tahun = '"+ inputTahun +"' WHERE id = '"+ inputId +"'";
        connection.query(query, (err, result) => {
            if(err){
                console.log("ERROR");
            }

        res.send({ data: result }); //ini adalah text yg akan ditampilkan pada user

        });
        connection.release();
        })
    },
}


module.exports = listData;