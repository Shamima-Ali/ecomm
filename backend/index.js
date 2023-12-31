import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';

import ownerRouter from './routes/owner.routes.js'
import customerRouter from './routes/customer.routes.js'
import productRouter from './routes/product.routes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.send({ message: "Hello World! This is a dummy message" });
});

app.use('/api/v1/owners', ownerRouter);
app.use('/api/v1/customers', customerRouter);
app.use('/api/v1/products', productRouter);


const startServer = async () => {
    try {
        // const path = require("path")

        // // ... other app.use middleware setups
        // app.use(express.static(path.join(__dirname, "client", "build")))

        // // ...
        // // Right before your app.listen(), add this:
        // app.get("*", (req, res) => {
        // res.sendFile(path.join(__dirname, "client", "build", "index.html"));
        // });

        connectDB(process.env.MONGODB_URL);
        app.listen(5000, () => console.log('Server started on port http://localhost:5000'));
    } catch (error) {
        console.log(error); 
    }
}

startServer();
 