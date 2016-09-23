module.exports = {
  test: function(req, res){
    console.log(req, 'req test!');
    res.sendStatus(200);
  }
}