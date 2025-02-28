const express = require('express');

function main()
{
    const app = express();

    // Middlewares
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Welcome to versioning repository!');
    });

    app.use('/api', require('./routes'));

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}

main();