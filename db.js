const mysql=require ("mysql2");

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Irmegun9576$",
    database:"casino"
});
db.connect((err)=>{
    if(err){
        console.log("Database connection failed");
        console.log(err);
        return;
    }
    console.log("MYSQL connected!");
});
module.exports=db;