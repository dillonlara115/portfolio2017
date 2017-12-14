import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

   constructor(props){
       super(props);

       this.state = {
         products: [],
         dataRoute: 'http://35.226.129.241/wp-json/wp/v2/portfolio/'
       }
   }

   componentDidMount(){
       fetch(this.state.dataRoute)
           .then(res => res.json())
           .then(products => this.setState((prevState, props) => {
               return { products: products.map(this.mapProduct)};
           }));
   }

   mapProduct(product){
       return {
         id: product.id,
         website: product.website,
         name: product.title.rendered,
         content: product.content.rendered
       }
     }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="products">

        {this.state.products.map((product) =>
          <div className="product" key={`product-${product.id}}`}>

            <p>{ product.name }</p>

                   <div dangerouslySetInnerHTML={{__html: product.content}}></div>

         {product.website}

          </div>
        )}

     </div>
      </div>
    );
  }
}

export default App;
