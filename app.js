const express = require('express');
const app = express();

// Handle favicon request
app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Serve static files from 'public' directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Pokemon Game - Login' });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: 'Pokemon Game - Dashboard' });
});

// Handle 404
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { title: 'Error', message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});