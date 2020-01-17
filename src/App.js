import React, { Component } from 'react';
import './App.css';
import Product from "./components/Product";
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineForms } from 'react-redux-form';

import MyForm from './components/Myform';

const initialUser = { name: '' };

const store = createStore(combineForms({
  user: initialUser,
}));


const products = [

  {
    id: 1,
    name: "Chair Office",
    description: "IKEA",
    img: "https://f1-styx.imgix.net/catalogue/MKR-30.jpg?auto=format&bg=FFFFFF&dpr=2.625&fit=fillmax&h=200&q=36&trim=color&trimcolor=%23FFFFFF&w=200",
    price: 240000
  },

  {
    id: 2,
    name: "Table",
    description: "Office Property",
    img: "https://www.klikoffice.co.id/image/cache/data/meja-kantor/meja-kantor-lunar-1-2-biro-1-laci-1-pintu-208-700x700.jpg",
    price: 135000
  },


  {
    id: 3,
    name: "TV Samsung",
    description: "Samsung",
    img: "https://www.westcoasthifi.com.au/wp-content/uploads/2016/09/samsung-50ku7000-50-inch-4k-uhd-smart-led-tv-500x500.jpg",
    price: 500000
  },

  {
    id: 4,
    name: "Gaming Chair",
    description: "Razer",
    img: "http://kkomputer.com/1813-large_default/harga-jual-spesifikasi-review-gaming-chair-kursi-game-marvo-scorpion-ch101-malang.jpg",
    price: 450000
  },


  {
    id: 5,
    name: "iPhone 11",
    description: "iPhone",
    img: "https://media.dinomarket.com/docs/imgTD/2019-12/pic_iPhone11_Black1_051219191236_ll.jpg.jpg",
    price: 3000000
  },

  {
    id: 6,
    name: "Apple Watch",
    description: "Apple",
    img: "https://media.dinomarket.com/docs/imgTD/2017-12/pic_apple_watch_grey1_211217211235_ll.jpg.jpg",
    price: 5000000
  }

];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      cart: [
        {
          id: 1,
          name: "Chair Office",
          description: "IKEA",
          img: "https://f1-styx.imgix.net/catalogue/MKR-30.jpg?auto=format&bg=FFFFFF&dpr=2.625&fit=fillmax&h=200&q=36&trim=color&trimcolor=%23FFFFFF&w=200",
          price: 240000,
          unit: 2
        }
      ]
    };
  }

  handleAddFunc(product) {
    const existingProductIndex = this.state.cart.findIndex(p => p.id === product.id);

    if (existingProductIndex >= 0) {

        const cartProducts = this.state.cart.slice();

        const existingProduct = cartProducts[existingProductIndex];

        const updatedUnitsProduct = {
          ...existingProduct,
          units: existingProduct.units + product.units
        };

        cartProducts[existingProductIndex] = updatedUnitsProduct;

        this.setState({
          cart: cartProducts
        });

    } else {
      this.setState({
        cart: [...this.state.cart, product]
      });
    }
  }
  
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Container>
            <Switch>
              <Route exact path='/' >
                  <main className="flex flex-wrap justify-between">
                    <>
                      {
                        products.map(p => <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} />)
                      }
                    </>
                    <div className="box">
                      <h2>Cart List Item</h2>
                      <ul>
                      {
                        this.state.cart.map(c => <li>{c.name} | Units {c.units}</li>)
                      }
                      </ul>
                    </div>
                  </main>
              </Route>
              <Route exact path='/admin'>
              <Provider store={ store }>
                <MyForm />
              </Provider>
                <Admin/>
              </Route>
            </Switch>
        </Container>
      </Router>
    </>
    );
  }
}

export default App;
