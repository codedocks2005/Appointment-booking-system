const fs = require('fs');

// Creating a file named "example.txt"
fs.writeFile('example.txt', 'This is a new file!', (err) => {
    if (err) throw err;
    console.log('File created successfully!');
});

fs.open('example.txt', 'r+', (err, fd) => {
    if (err) throw err;
    console.log('File opened successfully! File Descriptor:', fd);
});

fs.appendFile('example.txt', '\nAppending new content!', (err) => {
    if (err) throw err;
    console.log('Content written successfully!');
});


