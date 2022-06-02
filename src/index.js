const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./models/dbConnection');

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors)


const listener = app.listen(5432,()=>{
    console.log("server berjalan "+ listener.address().port)
})

app.get('/api/readData', (req, res)=>{
    pool.query("SELECT * FROM master.nama_disabilitas", (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.log(result)
        }
    })
})

// app.get('/api/readData', (req, res)=>{
//     const sql = "SELECT * FROM public.formulir"

//     db.query(sql,(err,result )=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//             console.log(result)
//         }
//     })
// })