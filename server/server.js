import app from "./app.js";

app.get("/", (req, res, next) => {
    res.send("<h1>Working</h1>")
})

app.listen(process.env.PORT, ()=> console.log(`Server listening on port ${process.env.PORT}`));