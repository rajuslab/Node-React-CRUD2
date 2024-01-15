const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');

/* GET programming languages. by Pagination*/
router.get('/', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/** Create Post/Data Query Routers*/
router.post('/create', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.createData(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
});

/** Update Post/Data Query Routers */
router.put('/update/:up_id', async function(req, res, next) {
  try {
    res.json( await programmingLanguages.updateData(req.params.up_id, req.body));
  } catch(err) {
    console.error(`Error While Update Programming Lang.`, err.message);
    next(err);
  } 
});

/** Remove Post/Data Query Routers */
router.delete('/delete/:re_id', async function(req, res, next) {
  try {
    res.json( await programmingLanguages.removeData(req.params.re_id));
  } catch(err) {
    console.error('Error While Delete Data ?');
    next(err);
  }

})
module.exports = router;