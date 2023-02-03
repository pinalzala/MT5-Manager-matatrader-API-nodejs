const express = require('express');
const router = express.Router();
const userService = require('../service/user.service');
const orderService = require('../service/order.service');
const positionService = require('../service/position.service');
const tradeService = require('../service/traderequest.service');
const clientService = require('../service/client.service');
// ========================================App api routes====================================//
// User APIs Route
router.post('/adduser', adduser);
router.post('/adduser', updateuser);
router.post('/deleteuser', deleteuser);
router.post('/getuser', getuser);
// ./User APIs Route

// Orders APIs Route
router.post('/getopenorderbyticket', getopenorderbyticket);
router.post('/totalopenorder', totalopenorder);
router.post('/getopenorderbypage', getopenorderbypage);
router.post('/getclosedorderbyticket', getclosedorderbyticket);
router.post('/totalclosedorder', totalclosedorder);
router.post('/getclosedorderbypage', getclosedorderbypage);
router.post('/deleteopenorder', deleteopenorder);
router.post('/deleteclosedorder', deleteclosedorder);
router.post('/updateopenorder', updateopenorder);
router.post('/updateclosedorder', updateclosedorder);
router.post('/reopenorder', reopenorder);
// ./Orders APIs Route

// Deals APIs Route
router.post('/getdealbyticket', getdealbyticket);
router.post('/totaldeal', totaldeal);
router.post('/getdealbypage', getdealbypage);
router.post('/deletedeal', deletedeal);
router.post('/updatedeal', updatedeal);
// ./Deals APIs Route

// Positions APIs Route
router.post('/getpositionbysymbol', getpositionbysymbol);
router.post('/totalposition', totalposition);
router.post('/getpositionbypage', getpositionbypage);
router.post('/deleteposition', deleteposition);
router.post('/updateposition', updateposition);
// ./Positions APIs Route

// Trade request APIs Route
router.post('/balanceoperation', balanceoperation);
router.post('/calculateratebuy', calculateratebuy);
router.post('/calculateratesell', calculateratesell);
router.post('/calculatemargin', calculatemargin);
router.post('/calculateprofit', calculateprofit);
router.post('/traderequest', traderequest);
// ./Trade request APIs Route

// Client APIs Route
router.post('/addclient', addclient);
router.post('/updateclient', updateclient);
router.post('/deleteclient', deleteclient);
router.post('/getclient', getclient);
// ./Client APIs Route
// =======================================./App api routes====================================//

module.exports = router;

function tstapi(req, res, next) {
    newService.tstapi(req.body)
        .then(data => res.json(data))
        .catch(next);
}

// User APIs
function adduser(req, res, next) {
    userService.adduser(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function updateuser(req, res, next) {
    userService.updateuser(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function deleteuser(req, res, next) {
    userService.deleteuser(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function getuser(req, res, next) {
    userService.getuser(req.body)
        .then(data => res.json(data))
        .catch(next);
}
// ./User APIs

// Order APIs
function getopenorderbyticket(req, res, next) {
    orderService.getopenorderbyticket(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function totalopenorder(req, res, next) {
    orderService.totalopenorder(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function getopenorderbypage(req, res, next) {
    orderService.getopenorderbypage(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function getclosedorderbyticket(req, res, next) {
    orderService.getclosedorderbyticket(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function totalclosedorder(req, res, next) {
    orderService.totalclosedorder(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function getclosedorderbypage(req, res, next) {
    orderService.getclosedorderbypage(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function deleteopenorder(req, res, next) {
    orderService.deleteopenorder(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function deleteclosedorder(req, res, next) {
    orderService.deleteclosedorder(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function updateopenorder(req, res, next) {
    orderService.updateopenorder(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function updateclosedorder(req, res, next) {
    orderService.updateclosedorder(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function reopenorder(req, res, next) {
    orderService.reopenorder(req.body)
        .then(data => res.json(data))
        .catch(next);
}
// ./Order APIs

// Deal APIs
function getdealbyticket(req, res, next) {
    dealService.getdealbyticket(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function totaldeal(req, res, next) {
    dealService.totaldeal(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function getdealbypage(req, res, next) {
    dealService.getdealbypage(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function deletedeal(req, res, next) {
    dealService.deletedeal(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function updatedeal(req, res, next) {
    dealService.updatedeal(req.body)
        .then(data => res.json(data))
        .catch(next);
}
// ./Deal APIs

// Position APIs
function getpositionbysymbol(req, res, next) {
    positionService.getpositionbysymbol(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function totalposition(req, res, next) {
    positionService.totalposition(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function getpositionbypage(req, res, next) {
    positionService.getpositionbypage(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function deleteposition(req, res, next) {
    positionService.deleteposition(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function updateposition(req, res, next) {
    positionService.updateposition(req.body)
        .then(data => res.json(data))
        .catch(next);
}
// ./Position APIs

// Trade request APIs
function balanceoperation(req, res, next) {
    tradeService.balanceoperation(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function calculateratebuy(req, res, next) {
    tradeService.calculateratebuy(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function calculateratesell(req, res, next) {
    tradeService.calculateratesell(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function calculatemargin(req, res, next) {
    tradeService.calculatemargin(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function calculateprofit(req, res, next) {
    tradeService.calculateprofit(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function traderequest(req, res, next) {
    tradeService.traderequest(req.body)
        .then(data => res.json(data))
        .catch(next);
}
// ./Trade request APIs

// Client APIs
function addclient(req, res, next) {
    clientService.addclient(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function updateclient(req, res, next) {
    clientService.updateclient(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function deleteclient(req, res, next) {
    clientService.deleteclient(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function getclient(req, res, next) {
    clientService.getclient(req.body)
        .then(data => res.json(data))
        .catch(next);
}
// ./Client APIs