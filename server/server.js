import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());//whernver we get any request on the server then it will pass through the middleware
app.use(cors());

app.get('/', (req, res) => res.send("API working"))

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));