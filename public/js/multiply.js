module.exports = function (a, b) {
      const product= parseFloat(a) * parseFloat(b);
      if(isNaN(product)) {
        return undefined;
      }
      return product;
    }

 