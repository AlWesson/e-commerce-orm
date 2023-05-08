const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // include its associated Products
  try{
    const categoryData = await Category.findAll({ include: [{ model: Product}]});
    res.status(200).json(categoryData);
  }
  catch(err) {
    res.status(500).json({message: "Cannot be found.."});
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // include its associated Products
  try{
    const catID = await Category.findByPk(req.params.id({ include: [{ model: Product}]}));
    res.status(200).json(catID);
  }
  catch(err){
    res.status(500).json({message: "Cannot be found.."});
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const createCategory = await Category.create(req,body);
    res.status(200).json(createCategory);
  }
  catch(err){
    res.status(500).json({message: "Cannot be created.."});
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const updateCategory = await Category.update(req.body, {where: {id: req.params.id}});
  }
  catch(err){
    res.status(500).json({message: "Cannot be updated.."});
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deleteCategory = await Category.delete({where: {id: req.params.id}});
  }
  catch(err){
    res.status(500).json({message: "Cannot be deleted.."});
  }
  
});

module.exports = router;
