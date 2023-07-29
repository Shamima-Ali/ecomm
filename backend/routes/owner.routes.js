import express from "express";

import {
    getAllOwners,
    getOwnerInfoById,
    createOwner,
    editOwnerInfo,
    verifyOwner,
} from '../controllers/owner.controller.js';

const router = express.Router();

router.route('/').get(getAllOwners);
router.route('/verifyOwner').post(verifyOwner);
router.route('/:id').get(getOwnerInfoById);
router.route('/').post(createOwner);
router.route('/:id').patch(editOwnerInfo);

export default router;