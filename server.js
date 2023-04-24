// Ioana A Mititean
// Exercise 33.3 - Lunchly

/** Start server for Lunchly. */

const { app } = require("./app");


app.listen(3000, "127.0.0.1", function() {
    console.log("Listening on host 127.0.0.1, port 3000");
});
