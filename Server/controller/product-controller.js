import productModel from "../model/product-schema.js";
export const getProduct = async (req, res) => {
  try {
    //getting all the data
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findOne({ 'id': id });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
