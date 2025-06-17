function getHome(req, res) {
    res.render("index", { title: "Home" });
};

function getAbout(req, res) {
    res.render("index", { title: "About"});
};

function getContact(req, res) {
    res.render("index", { title: "Contact"});
};

module.exports = { getHome, getAbout, getContact };