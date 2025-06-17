function getHome(req, res) {
    res.send("Home");
};

function getAbout(req, res) {
    res.send("About");
};

function getContact(req, res) {
    res.send("Contact");
};

module.exports = { getHome, getAbout, getContact };