var fs = require('fs');
var colors = require('colors');

fs.readdir(__dirname, function(err, files) {
    console.log(files);
    fs.writeFile('./tekst.txt', files, function(err, data) {
        if (err) throw err;
        console.log('Zapisano do pliku'.green);
    });
});

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane po zapisie'.blue);
    console.log(data);
});