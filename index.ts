import database from "./db";
import { Product } from "./product";

(async () => {
  await database.sync();
  
  /* Create */
  const newProduct = await Product.create({
    name: 'monitor',
    price: 123,
    description: 'very good mouse'
  })

  /* Read */
  const produtos = await Product.findAll({ 
    where: {
      name: 'monitor'
    }
  })
  console.log(produtos)
  /* Update */
  const update = await Product.update({ name: 'Mouse' }, {
    where: {
      name: 'Monitor'
    }
  })
  /* Delete */
  const destroy = await Product.destroy({ where: {
    name: 'Mouse'
  }})

})();
