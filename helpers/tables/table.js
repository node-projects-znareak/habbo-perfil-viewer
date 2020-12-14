require("console.table");

module.exports = (data, propsHidden = []) => {
  const _data = Array.isArray(data) ? [...data] : [{ ...data }];

  if (propsHidden.length > 0) {
    _data.forEach((item) => {
      // recorremos cada objecto del arreglo y comprobamos
      // que dentro del arreglo haya propiedades a eliminar de dicho objeto
      for (const prop in item) {
        if (propsHidden.includes(prop)) {
          delete item[prop];
        }
      }
    });
  }
  console.table(_data);
};
