const express = require('express');

function main()
{
    const app = express();
    app.get('/', (req, res) => {
        res.send('Welcome to versioning repository!');
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}

main();