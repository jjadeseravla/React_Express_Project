//one route to return an array of customers

const express = require('express');

const app = express(); //app variable to initialise express

//add route
app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Jade', lastName: 'Alvares' },
    {id: 2, firstName: 'Saffron', lastName: 'Cook' },
    {id: 3, firstName: 'Jemmimah', lastName: 'Nuamah' }
  ]; //would normally come from a DB and not hardcoded

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
