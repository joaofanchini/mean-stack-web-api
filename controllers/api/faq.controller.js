var config = require('config.json');
var express = require('express');
var router = express.Router();

var faqService = require('services/faq.service')

// routes
router.post('/register', registerFaq);
router.get('/:_id', getCurrentFaq);
router.put('/:_id', updateFaq);
router.delete('/:_id', deleteFaq);
router.get('/',getAllFaq);

//
module.exports = router;

function getAllFaq(req,res){
    faqService.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err){
            res.status(400).send(err);
        });
}

function registerFaq(req, res) {
    faqService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getCurrentFaq(req, res) {
    faqService.getById(req.params._id)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function updateFaq(req, res) {
    faqService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function deleteFaq(req, res) {
    faqService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}