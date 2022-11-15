import path from 'node:path';

import { Router } from 'express';

import multer from 'multer';

import { createCategories } from './app/useCases/categories/createCategories';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProducts } from './app/useCases/products/createProducts';

import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategories } from './app/useCases/categories/listProductsByCategories';

import { listOrders } from './app/useCases/orders/listOrders';
import { createOrders } from './app/useCases/orders/createOrders';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(request, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(request, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategories);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProducts);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategories);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrders);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// delete/cancer order
router.delete('/orders/:orderId', cancelOrder);

