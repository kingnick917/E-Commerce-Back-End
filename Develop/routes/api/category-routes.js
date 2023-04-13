const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include:[Product]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);

  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const categoryData = await categories.findByPk({id});
    include: [{ model: Location, through: Trip, as: 'planned_trips' }]
  }
  try {
    const categoryData = await categories.findByPk(req.params.id, {

      include: [{ model: Product,  }]
    });



    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
  
  next();
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
