const router = require('express').Router();
const Record = require('../models/records');

router.get('/records', async (req, res)=> {

  try { 
    const records = await Record.find({})
    res.json({error: false, body: records})
  } catch (error) {
    res.json({error: true, body: error.message})
  }
  
});


router.post('/records', async (req, res)=> {

  const { category, money, type } = req.body;
  const newRecord = new Record({
    category,
    money,
    type
  })

  try {
    const record = await newRecord.save()
    res.json({ error: false, body: record })
  } catch (error) {
    res.json({ error: true, body: error.message })
  }

})


module.exports = router