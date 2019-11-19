const app = require('./app.js')
const i = document.body.addEventListener('submit', function(event) {
    event.preventDefault();
    let form = document.querySelector('textarea');
    app(form.value);
    form.value = "";
});