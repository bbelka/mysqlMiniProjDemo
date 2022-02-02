const router = require('express').Router();
const db = require('../../../utils/connection')


router.put('/:id', (req, res) => {
    const query = 'UPDATE reviews SET review = ? WHERE id = ?;';
    const params = [req.body.review, req.params.id];

    db.query(query, params, (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        res.json(result.affectedRows);
    });
});

router.post('/', ({ body }, res) => {
    const query = 'INSERT INTO reviews(movie_id, review) VALUES(?,?)';
    const params = [body.movie_id, body.review];

    db.query(query, params, (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        res.json(result.insertId);
    });
})

module.exports = router;