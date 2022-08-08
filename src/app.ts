import express from 'express';
import ProductRoutes from './routes/products.router';
import UserRoutes from './routes/user.router';
import OrderRoutes from './routes/order.router';

const app = express();

app.use(express.json());

app.use(ProductRoutes);
app.use(UserRoutes);
app.use(OrderRoutes);

export default app;