const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();
const {NODE_ENV} = process.env;

if (NODE_ENV !== "production") {
  require("dotenv").config();
}

const {
  PORT = 8000,
  STRIPE_SECRET_KEY
} = process.env;

const stripe = require("stripe")(STRIPE_SECRET_KEY);

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

if (NODE_ENV === "production") {
  const buildDir = path.join(__dirname, "../client/build");
  app.use(express.static(buildDir));

  app.get("*", (request, response) => {
    const indexHtmlFile = path.join(__dirname, "../client/build", "index.html");
    response.sendFile(indexHtmlFile);
  });
}

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on port ${PORT}`);
});

app.post("/payment", async (request, response) => {
  const {amount, token} = request.body;

  const body = {
    amount,
    currency: "usd",
    source: token.id
  };

  try {
    const charge = await stripe.charges.create(body);

    response.send({
      success: charge
    });
  } catch (error) {
    response.status(500).send({error});
  }
});
