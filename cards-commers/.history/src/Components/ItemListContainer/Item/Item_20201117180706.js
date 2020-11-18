import React from 'react';
import {useCartContext} from '../../Context/cartContext';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Item.css';




function Item({listProducts}){   
    
      const { cart, onAdd, onRemove, clear } = useCartContext();
      let [compra, setCompra] = useState({
        isValid: false,
        id: null,
        cantidad: 0,
        nombre: "",
        precio: 0,
      });
      let [itemcart, setItem] = useState(listProducts);
    
      let availableProducts = 14;
      //Function add to Cart
      const handleAdd = (counter) => {
        return ({ stock }) => {
          if (stock <= 0) {
            alert("No hay stock");
          } else {
            setCompra({ isValid: true, cantidad: counter, item: itemcart.item });
          }
        };
      };
      //Function button Buy
      const handleBuy = () => {
        onAdd(compra);
        //onAdd(compra);
      };



    return (
        <>
        <Row className="RowItems ">
      <Col  xs="12" sm="12" className="colDivItem">
                       <div className="img">
                 <Link to={`/item/${listProducts.id}`}> <img key={listProducts.id} src={listProducts.image}/> </Link>
              </div>
                    <div className="containerSection">
              <div className="info">
                    <p> <span className="detailDeport">RUNNING</span> </p>
                    <p> <span className="detailMarca"> {listProducts.marca}</span></p>
              </div>
          </div>
          <div className="containerSection">
      <div className="precio">
                    <h3><span className="sku">SKU:{listProducts.precio}</span></h3>
                    <h3><span className="cost">${listProducts.precio}</span></h3>
                    <button class="btn btn-primary btn-sm" onClick={handleAdd}>Add to Cart</button>
              </div>
          </div>
      </Col>
      </Row>
      </>
)
}

export default Item;