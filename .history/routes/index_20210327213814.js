"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});

module.exports = router;
//# sourceMappingURL=index.js.map 