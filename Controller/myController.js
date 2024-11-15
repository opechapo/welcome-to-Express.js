const homePage = (req, res) => {
  return res.send("This is home page");
}

const dltPage = (req, res) => {
  const param = req.params.id;
 return res.send(`This is dlt page ${param}`);
}

module.exports = {
  dltPage,
  homePage
}