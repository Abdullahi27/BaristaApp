const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const notCompleted = await Post.find({isCompleted: "uncomplete"});
      const Completed = await Post.find({isCompleted: "completed"});


      res.render("profile.ejs", {user: req.user, notCompleted: notCompleted, Completed: Completed});
    } catch (err) {
      console.log(err);
    }
  },
  completed: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          isCompleted:  "completed" ,
          employee: req.user.userName 
        }
      );
      res.redirect(`/profile`);
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      await Post.create({
        coffeeSelected: req.body.coffee,
        size: req.body.size,
        customerName: req.body.customerName
      });
      console.log("Post has been added!");
      res.redirect("/thankyou.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  delete: async (req, res) => {
    try {
  
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
