var Test = {
    init: function (app) {
        app.get('/test/test', this.doTest);
        app.get('/test/show', this.doShow);
        app.get('/', function (req, res, next) {
            res.render('index', {title: 'Express'});
        });
    },
    doTest: function (req, res) {
        res.render('index', {title: 'Express'});
    },
    doShow: function (req, res) {
        res.send({status: 2, info: "bbbbbb"})
    }
}
module.exports = Test;