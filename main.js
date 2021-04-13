const express = require("express");
const app = express();
const port = 4000;
const timeCheck = (req, res, next) => {
    const time = new Date();
    if (time.getDay() == 0 || time.getDay() == 6) {
        return "Please come back in work days";
    }
    if (time.getHours) next();
};

app.use(timeCheck);

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/myapp/index.html");
});
app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/myapp/style.css");
});
app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/myapp/services.html");
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/myapp/contact.html");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
