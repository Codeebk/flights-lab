var Flight = require('../models/flight');
const today = Date.now();

module.exports = {
index, 
new: newFlight,
create};

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) {
            console.log(err);
            return res.redirect('/flights/new');
        }
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight'});
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(err, flights)
        res.render('flights/index', { title: 'All Flights', today, flights });
    });
}