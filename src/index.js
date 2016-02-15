var testcomp = require('./components/testcomp');

var app = document.createElement('div');

document.body.appendChild(app);
app.appendChild(testcomp());
