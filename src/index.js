const server = require('./app');
import connection from "./dbConnection/connection"

main().catch(err => console.log(err));

async function main() {
  await connection()
    server.listen(process.env.PORT, () => {
        console.log('Listening at PORT: ' + process.env.PORT)
  })
  
}
