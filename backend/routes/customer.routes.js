import express from 'express';

import {
    getAllCustomers,
    getCustomerInfoById,
    createCustomer,
    editCustomerInfo,
} from '../controllers/customers.controller.js';

const router = express.Router();

router.route('/').get(getAllCustomers);
router.route('/:id').get(getCustomerInfoById);
router.route('/').post(createCustomer);
router.route('/:id').patch(editCustomerInfo);

export default router;