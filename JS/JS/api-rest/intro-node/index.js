const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

app.get('*', (req, res) => {
    res.send({message: "Hola mundo"});
})