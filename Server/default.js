import productModel from './model/product-schema.js';
import { products } from './constants/data.js';

const DefaultData = async () => {
    try {
        await productModel.deleteMany({});
        await productModel.insertMany(products);
        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;