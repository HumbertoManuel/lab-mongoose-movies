const router = require("express").Router();
const Celebrity = require("../models/Celebrity");

router.get('/celebrities', (req, res) => {
  // get all the celebrities from the database -> find() returns all the documents
  Celebrity.find().then(celebritiesFromDB => {
    console.log("this console log", celebritiesFromDB);
    // render a celebrities view to display them
    res.render('celebrities/index', { celebritiesList: celebritiesFromDB })
  }).catch(err => {
    console.log(err);
  })
})

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
})

router.get("/celebrities/:id", (req,res) => {
  const celebrityId = req.params.id; 
  Celebrity.findById(celebrityId)
   .then(celebritiesFromDB => {
     console.log("this is a specific celeb: ",celebritiesFromDB);
    res.render('celebrities/show', {celebritiesList : celebritiesFromDB });
  }).catch(err => {
    console.log(err);
  })
});


router.post('/celebrities', (req, res) => {
  console.log(req.body);
  const {name,occupation,catchPhrase} = req.body;
  console.log(name,occupation,catchPhrase); 
  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrity => {
      console.log('this Celebrity was just created: ', celebrity);
      res.redirect(`/celebrities/${celebrity._id}`)
    })
})


router.get('/celebrities/delete/:id', (req, res) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndDelete(celebrityId)
    .then(() => {
      // redirect to the celebrities list
      res.redirect('/celebrities/new')
    })
    .catch(err => {
      console.log(err);
    })
})


router.post('/celebrities/edit/:id', (req, res) => {
  const celebrityId = req.params.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase = req.body.catchPhrase;
    // const {name,occupation,catchPhrase} = req.body;
  Book.findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
    .then(book => {
      res.redirect(`/celebrities/${celebrity._id}`);
    })
    .catch(err => {
      console.log(err);
    })
})





module.exports = router;