var wkhtmltopdf = require('wkhtmltopdf');
var Mustache = require('mustache');
var fs = require('fs');

module.exports = function () {
    function InvoiceHandler() {
        this.type = 'invoice';
    }

    InvoiceHandler.prototype.work = function (payload, callback) {

        console.log('working on job');
        console.log(payload);

        fs.readFile('./templates/invoice1.html', 'utf8', function (err, html) {
            if (err) {
                throw err;
            }

            var date = new Date();
            var expireDate = new Date(date);
            expireDate.setDate(expireDate.getDate() + 30);

            var view = {
                invoice_date: function () {
                    return "test";
                },
                invoice_expire: function () {
                    return "test";
                },
                format_price: function () {
                    return this.price.toFixed(2);
                },
                total_price: function () {
                    return (this.price * this.amount).toFixed(2);
                },
                all_total: function() {
                    let total = this.products.map(value => value.price * value.amount);
                    return total.reduce((a,b)=>a+b).toFixed(2);
                }
            };

            view = Object.assign(view, payload);

            var output = Mustache.render(html, view);

            wkhtmltopdf(output, {output: './pdf/' + view.id + "-" + view.status + '.pdf'});
        });

        callback('success');
    };

    var handler = new InvoiceHandler();
    return handler;
};

function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return day + '/' + month + '/' + year;
}