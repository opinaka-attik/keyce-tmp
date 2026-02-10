import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Variable d’environnement
const SECRET_MESSAGE = process.env.SECRET_MESSAGE;

app.get("/", (req, res) => {
    res.send(`Message secret : ${SECRET_MESSAGE}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});