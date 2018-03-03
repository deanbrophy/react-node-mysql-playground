const express = require('express');

const router = express.Router();
const campaigns = require('../models/campaigns');

/* GET users listing. */
router.get('/', (req, res) => {
  campaigns.fetchAll().then((campaignCollection) => {
    res.send(campaignCollection.toJSON());
  });
});

module.exports = router;
