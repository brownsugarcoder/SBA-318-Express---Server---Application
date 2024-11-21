//Import Express
    const express = require('express'); // Require Express
    const app = express(); // Initialize Express
    const PORT = 3002; // Define a port number
    //const cookieParser = require('cookie-parser');

    // Middleware 1
    const cookieParser = require('cookie-parser');
    const bodyParser = require('body-parser');
    app.use(cookieParser());
    app.use(bodyParser.json()); // Parse JSON data
    app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
    
    // Middleware 2
    const logger = (req, res, next) => {
      console.log(`${req.method} ${req.url}`);
      next(); 
    };
    app.use(logger); 
    
    const errorHandler = (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something went wrong!');
    };
    
    app.use(errorHandler);
    


    
    app.get('/', (req, res) => { // Set up a basic route
      res.send('Happy Happy! Ayy My First Server Yall!');
    });
    app.listen(PORT, () => { // Start the server
      console.log(`Server is running on http://localhost:${PORT}`);
    });
    
    // To GET a single course
   /* app.get('/api/course/:id', (req, res) => {
      res.send ([ '1', '2'])

    }); */



  /* app.get('/api/course/:id', (req, res) => {
      const course = course.find(c => c.id === parseInt(req.params.id));
        if (!course) res.status(404).send( 'The course was not found' )
    });
        */





    const course = [
        { id: 1, name: 'Kaliya', language: "Arabic" },
        { id: 2, name: 'DJ', language: "Spanish" },
        { id: 3, name: 'Danielle', language: "Hawaiian" },
        { id: 4, name: 'Vaughn', language: "Spanish" }
      ];
          // To GET a single course

      app.get('/course', (req, res) => {
        res.json(course);
      });

     

// POST: Add a new name
    app.post('/course', (req, res) => {
    const newUser = { id: data.length + 1, name: 'Kai' }; 
    data.push(newCourse); 
    res.json(newCourse);
  });

  // PUT: Update a name
    app.put('/course/:id', (req, res) => {
    const userId = parseInt(req.params.id); 
    const user = data.find(u => u.id === userId);
    if (course) {
      course.name = 'Updated Name'; 
      res.json(course); 
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

// DELETE: Delete a name
app.delete('/course/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const index = data.findIndex(u => u.id === userId);
  if (index !== -1) {
    const deletedCourse = data.splice(index, 1);
    res.json(deletedCourse);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});






  
