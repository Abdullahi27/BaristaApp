module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getThanks: (req, res) => {
    res.render("thankyou.ejs");
  },
};
