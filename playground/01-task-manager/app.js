const express = require('express');
const connectDB = require('./db/connect');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();
app.use(express.json());
app.use(express.json());

app.use('/api/v1', taskRoutes);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    await connectDB(process.env.MONGODB_URI);
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start()
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));
