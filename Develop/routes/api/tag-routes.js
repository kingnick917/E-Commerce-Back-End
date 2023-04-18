const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findAll({
      include:[Product]
    });
    res.status(200).json(tagsData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);

  }
});





router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    console.log(req.params.id)
    const tagsData = await Tag.findByPk(req.params.id, {
      include: [Product]
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((Tag) => {
    res.status(200).json(Tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value


  const TagData = Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })

    .then((TagData) => res.json(TagData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});


router.delete('/:id',async(req, res) => {
  try {
    const ProductData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!ProductData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(ProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
