const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-page => GET
router.get('/add-page', adminController.getAddPage);

// /admin/pages => GET
router.get('/pages', adminController.getPages);

// /admin/add-page => POST
router.post('/add-page', adminController.postAddPage);

router.get('/edit-page/:pageId', adminController.getEditPage);

router.post('/edit-page', adminController.postEditPage);

router.post('/delete-page', adminController.postDeletePage);

module.exports = router;