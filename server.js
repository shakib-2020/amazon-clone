/* eslint-disable max-len */
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
// API
const stripeSecretKey = process.env.STRIPE_SECRET;
const stripe = require("stripe")(stripeSecretKey);

// --App cofig
const app = express();

// port

const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

// --Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// --API routes
app.get("/", (request, response) =>
  response.status(200).send("Hello World! Happy hacking..!")
);
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!for this amount >>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunit of the currency
    currency: "usd",
  });

  //201 = OK- created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// --Listen command
app.listen(port, () => {
  console.log("Your app is running on", port);
});
