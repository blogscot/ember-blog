module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': [
        {
          id: 1,
          title: 'Bananas',
          author: 1,
          date: new Date(2014, 5, 4, 1, 12, 3),
          body: 'The most controversial aspect of the banana is whether it should be opened from the stem or from the bottom. I like to take it on a case-by-case basis.'
        },
        {
          id: 2,
          title: 'Monkeys',
          author: 1,
          date: new Date(2014, 9, 14, 1, 11, 45),
          body: 'Monkeys are pretty much the coolest animal. That is really all there is to it'
        }
      ],
      authors: [{
        id: 1,
        name: "George",
        posts: [1,2]
      }]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
