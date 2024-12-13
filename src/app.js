import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = 18868;

app.use(express.json());
app.use('/api/mocks', mocksRouter); 

import mongoose from 'mongoose';

const uri = 'mongodb+srv://nicoberzunces02:DnZcOn4cUs3jdfca@coderback.kjuhq.mongodb.net/CoderBack?retryWrites=true&w=majority';

mongoose.connect(uri)
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch(err => console.log('Error al conectar a MongoDB:', err));

    import { swaggerSpec, swaggerUi } from './swagger.js';

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});



