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
    price: 100
  },


  {
    id: 3,
    name: "",
    description: "Fabelio",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },

  {
    id: 4,
    name: "Banana",
    description: "I need those carbs",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },


  {
    id: 5,
    name: "Orange",
    description: "Orange are orange",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },

  {
    id: 6,
    name: "Orange",
    description: "Orange are orange",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
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
                    <ul>
                    {
                      this.state.cart.map(c => <li>{c.name} | units {c.units}</li>)
                    }
                    </ul>
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
