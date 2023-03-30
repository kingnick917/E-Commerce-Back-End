// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category,{
  foreignKey:`Category`

});
// Categories have many Products
Category.belongsTo(Product,{
  foreignKey:`Category`

})
// Products belongToMany Tags (through ProductTag)
Product.ProductTag(Tag,{

})
// Tags belongToMany Products (through ProductTag)
Tag.ProductTag(Product,{
  
})












module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
