const Flight = require("../models/flights");
const Ticket = require("../models/ticket");

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' });
}

async function create(req, res) {
   try {
    await Flight.create(req.body);
    res.redirect("/flights");
   } catch (err) {
    console.log(err);
    res.render("flights/new", {errorMsg: err.message });
    }
  }

async function index(req, res) {
    res.render('flights/index', {
        flights: await Flight.find()
    })
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id).populate(
      "ticket"
    );
    if (flight) {
    const tickets = await Ticket.find({ _id: { $nin: flight.ticket } }).sort(
      "name"
    );
    console.log(tickets);
    res.render("flights/show", { title: "Flight Detail", flight, tickets });
    }
  } catch (err) {
    console.log(err);
  }
}
function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight",
    errorMsg: "",
  });
}

module.exports = {
    new: newFlight,
    create,
    index,
    show
  };