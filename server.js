const app = require("./index")
require("dotenv").config()
const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
})