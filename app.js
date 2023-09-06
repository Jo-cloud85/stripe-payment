import express from 'express';
import dotenv from 'dotenv'
import 'express-async-errors';
import stripeController from './controllers/stripeController.js';

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

// controller

// error handler
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.static('./public'));
app.use(express.json());

// stripe
app.post('/stripe', stripeController)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const start = async () => {
    try {
        app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
