const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// App config
const app = express();

// middlewares

// prettier-ignore
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
  // Total price
  const total = req.query.total;
  // To create session by stripe
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // Ok - session created
  // Response will be sent to frontend (secret kye)
  // after accessing to this end point and sent total price
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// example endpoint == base Url
// http://127.0.0.1:5001/clone-88110/us-central1/api

// Listen command
exports.api = functions.https.onRequest(app);
