const Product = require('../../models/Product.js');

const addProduct = async (req, res) => {
  try {
    const { title, description, quantity, price, category, } = req.body;

    // Create a new Product
    let newProduct = new Product({
      title,
      category,
      price,
      quantity,
      description,
    });

    // Save the product to the database
    newProduct = await newProduct.save();

    res.status(200).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id, status } = req.body;

    // Find the product by orderId
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Update the product with the reply
    product.status = status;

    // Save the updated product
    await product.save();

    res.status(200).json({ message: 'Product update successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    //  product deleted
    const product = await Product.findByIdAndDelete(id)
    if (!product) return  res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product delete successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { addProduct, updateProduct, deleteProduct, getProduct };
