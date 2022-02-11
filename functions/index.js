const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KRZmjERpJEKFiD6k0NagpBVnEdTsOmGYSueNojfhMDy31MDvyQNo6bgoz5nGKsx7pGiOZFzIKryYUoU4em5l5A200tI087ZV2')
const { request, response } = require("express");

// API

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json());

// API routes
// app.get('/', (request, response) => response.status(200).send("hello World"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved fckkkkkkk', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currency
        currency: "usd",
    });

// 'ok created'
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
// - Listen command
exports.api = functions.https.onRequest(app)


// http://localhost:5001/fir-445cd/us-central1/api
// http://localhost:5001/fir-445cd/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
