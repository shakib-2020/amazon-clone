/* eslint-disable max-len */
const express = require("express");
const cors = require("cors");
const stripeScretKey =
  "sk_test_51LOHwtEpxgMDK8rjPIzNcsl1kqztDMpYbjLzHz2xqvXMlEj8UJr1olSoE5SVzjROEDKoXOrgEwcFOk98xWcYiR8s00uOTUyf4v";
const stripe = require("stripe")(stripeScretKey);
// API

// --App cofig
const app = express();

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
app.listen(8080, () => {
  console.log("Your app is running on port 8080...!!");
});
