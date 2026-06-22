const express = require("express");
const app = express();

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

app.get("/g_hikmatova_gmail_com", (req, res) => {
    const x = Number(req.query.x);
    const y = Number(req.query.y);

    if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
        res.type("text/plain").send("NaN");
        return;
    }

    const lcm = (x * y) / gcd(x, y);
    res.type("text/plain").send(String(lcm));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});