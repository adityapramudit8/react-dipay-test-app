// import React from "react";
// // import Product from "../Product";

// export default class Products extends React.PureComponent {

//   state = {
//     cart: [
//       {
//         id: 4,
//         name: "Banana",
//         description: "I need those carbs",
//         img: "https://tachyons.io/img/avatar_1.jpg",
//         price: 100,
//         units: 2
//       }
//     ]
//   };

//   findProductIndex = (cart, productID) => {
//     return cart.findIndex(p => p.id === productID);
//   };

//   updateProductUnits = (cart, product) => {
//     const productIndex = this.findProductIndex(cart, product.id);

//     const updatedProducts = [...cart];
//     const existingProduct = updatedProducts[productIndex];

//     const updatedUnitsProduct = {
//       ...existingProduct,
//       units: existingProduct.units + product.units
//     };

//     updatedProducts[productIndex] = updatedUnitsProduct;

//     return updatedProducts;
//   };

//   addToCart = (product) => {
//     const {cart} = this.state;
//     const existingProductIndex = this.findProductIndex(cart, product.id);

//     this.setState({
//       cart: existingProductIndex >= 0 
//         ? this.updateProductUnits(cart, product)
//         : [...cart, product]
//     });

//   };


//   render() {
//     const {products} = this.props;

//     return <div className="flex flex-wrap justify-between">
//       {
//         products.map(p => (
//           <Product key={p.id} {...p} addFunc={this.addToCart} />
//         ))
//       }
//     </div>
//   }
// }
