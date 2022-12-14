const server = require('./app');
// const { conn } = require('./db.js');
import connection from "./dbConnection/connection"

// conn.sync({ force: false }).then(() => {
//   server.listen(process.env.PORT, () => {
//     console.log('%s listening at ' + process.env.PORT);
//   });
// });


// async ()=>{
//     try{
//         await connection()
//         console.log("Connection OK")
//     }catch(error){
//         console.log(error)
//     }
// }

main().catch(err => console.log(err));

async function main() {
  await connection()
    server.listen(process.env.PORT, () => {
        console.log('Listening at PORT: ' + process.env.PORT)
  })
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
