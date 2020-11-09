import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import remeraNike from '../../Images/remera-nike.jpg';
import gorraGorinAzul from '../../Images/gorra-gorin-azul.jpg';
import remeraAdidas from '../../Images/remera-adidas.jpg';
import remeraPuma from '../../Images/remera-puma.jpg';
import gorraAdidasMilitar from '../../Images/gorra-adidas-militar.jpg';
import buzoAdidasGris from '../../Images/buzo-adidas-gris.jpg';
import remeraTopper from '../../Images/remera-topper.jpg';
import camperaNikeNegra from '../../Images/campera-nike-negra.jpg';
import remeraUnder from '../../Images/remera-under.jpg';
import remeraAllstar from '../../Images/remera-allstar.jpg';


const getDetailInfo = (id) => {
    return new Promise( (res) => {

        setTimeout( () => { 
            const products = [
                {
                  id: "0",
                  image: remeraNike,
                  productName: "Remera",
                  marca: "Nike",
                  genero: "Masculino",
                  style: "Running",
                  calidad: "Algodon 100%",
                  talle: "M",
                  color: "Blanco",
                  sku: "700020125628000",
                  precio: "$3.500",
                  detail1: "La remera NIKE Hybrid aporta comodidad a tu día a día.",
                  detail2: "Está confeccionada en tejido de algodón suave con una silueta clásica y un llamativo estampado.",
                  detail3: "Corte estandar.",
                  detail4: "Logo NIKE estampado.",
                },
                {
                  id: "1",
                  image: gorraGorinAzul,
                  productName: "Gorra Urban",
                  marca: "Gorin Bross",
                  genero: "Unisex",
                  style: "Urban",
                  calidad: "57% Poliéster, 43% Algodón",
                  talle: "Adaptable",
                  color: "Azul",
                  sku: "700020125628001",
                  precio: "$2.999",
                  detail1: "Las gorras GOORIN BROS son únicas, su diseño moderno y urbano es lo que buscás para elevar tu estilo.",
                  detail2: "Posee un ajuste regulable.",
                  detail3: "Presenta el diseño y el logo GOORIN BROS aplicados.",
                  detail4: "Origen China.",
                },
                {
                  id: "2",
                  image: remeraAdidas,
                  productName: "Remera",
                  marca: "Adidas",
                  genero: "Femenino",
                  style: "Running",
                  calidad: "Polyester 100%",
                  talle: "L",
                  color: "Celeste",
                  sku: "700020125628002",
                  precio: "$3.100",
                  detail1: "Esta remera de running TKO para mujer ADIDAS combina el poder de absorción de la tecnología Climalite con la protección contra los rayos UV para ayudar a cuidarte de los efectos dañinos del sol.",
                  detail2: "Su confección de dos capas incorpora una remera exterior y una remera interior sin mangas, ambas con dobladillos curvos.",
                  detail3: "Climalite absorbe el sudor para mantenerte seca en todo momento.",
                  detail4: "Presenta el logo ADIDAS estampado.",
                },
                {
                  id:"3",
                  image: remeraPuma,
                  productName: "Remera",
                  marca: "Puma",
                  genero: "Femenino",
                  style: "Running",
                  calidad: "Algodon 100%",
                  talle: "XS",
                  color: "Negro",
                  sku: "700020125628003",
                  precio: "$3.000",
                  detail1: "Hay remeras y remeras, pero esta remera tiene todo lo que necesitás para tus entrenamientos, confort y estilo.",
                  detail2: "Confeccionada en materiales realmente funcionales como DryCell creada para alejar el sudor de tu piel, esta te mantendrá seca y cómoda, da igual al nivel al que te entregues.",
                  detail3: "El logo reflectante y otros detalles te garantizarán no pasar desapercibido, el estilo sin duda será el centro de las miradas.",
                  detail4: "Presenta el logo Puma y detalles en estampado reflectivo.",
                },
                {
                  id:"4",
                  image: gorraAdidasMilitar,
                  productName: "Gorra",
                  marca: "Adidas",
                  genero: "Unisex",
                  style: "Urban",
                  calidad: "Algodon 100%",
                  talle: "Adaptable",
                  color: "Camuflado",
                  sku: "700020125628004",
                  precio: "$1.649",
                  detail1: "Con un diseño único la gorra Camo de Adidas es ideal para tus paseos por la ciudad.",
                  detail2: "Posee ajuste regulable.",
                  detail3: "Presenta el logo Adidas bordado.",
                  detail4: "Origen China.",
                },
                {
                  id: "5",
                  image: remeraTopper,
                  productName: "Remera",
                  marca: "Topper",
                  genero: "Masculino",
                  style: "Running",
                  calidad: "Polyester 100%",
                  talle: "XL",
                  color: "Gris",
                  sku: "700020125628005",
                  precio: "$2.100",
                  detail1: "Tus entrenamientos requieren que tus prendas acompañen tu rendimiento.",
                  detail2: "Esta remera Topper está diseñada con tecnología Dry Cool.",
                  detail3: "Un sistema que evapora la humedad de la prenda para mantenerte seco y cómodo.",
                  detail4: "Presenta el logo Topper estampado.",
                },
                {
                  id: "6",
                  image: remeraUnder,
                  productName: "Remera",
                  marca: "Under",
                  genero: "Masculino",
                  style: "Running",
                  calidad: "Algodon 100%",
                  talle: "XXL",
                  color: "Negro/Blanco",
                  sku: "700020125628006",
                  precio: "$2.350",
                  detail1: "La remera Tech 2.0 de Under Armour para entrenamiento incorpora un ajuste aerodinámico que acompaña tus movimientos sin distracciones.",
                  detail2: "Tecnología antiolor que previene el crecimiento de microbios que causan mal olor.",
                  detail3: "Posee tecnología Heatgear es un tejido súper transpirable que absorbe el sudor y regula la temperatura del cuerpo para que te sientas más fresco, seco y ligero que nunca.",
                  detail4: "Presenta el logo Under Armour estampado.",
                },
                {
                  id: "7",
                  image: buzoAdidasGris,
                  productName: "Buzo",
                  marca: "Adidas",
                  genero: "Unisex",
                  style: "Urban",
                  calidad: "60% Algodón, 30% Poliéster",
                  talle: "XL",
                  color: "Gris",
                  sku: "700020125628007",
                  precio: "$4.700",
                  detail1: "Con un diseño original, este buzo es ideal para acompañarte en tus actividades urbanas.",
                  detail2: "Capucha con cordón de ajuste.",
                  detail3: "Bolsillos laterales.",
                  detail4: "Puños y cintura elastizada.",
                },
                {
                  id: "8",
                  image: remeraUnder,
                  productName: "Remera",
                  marca: "Under",
                  genero: "Masculino",
                  style: "Running",
                  calidad: "Algodon 100%",
                  talle: "XXL",
                  color: "Negro/Blanco",
                  sku: "700020125628008",
                  precio: "$2.350",
                  detail1: "La remera Tech 2.0 de Under Armour para entrenamiento incorpora un ajuste aerodinámico que acompaña tus movimientos sin distracciones.",
                  detail2: "Tecnología antiolor que previene el crecimiento de microbios que causan mal olor.",
                  detail3: "Posee tecnología Heatgear es un tejido súper transpirable que absorbe el sudor y regula la temperatura del cuerpo para que te sientas más fresco, seco y ligero que nunca.",
                  detail4: "Presenta el logo Under Armour estampado.",
                },
                {
                  id: "9",
                  image: camperaNikeNegra,
                  productName: "Campera",
                  marca: "Nike",
                  genero: "Masculino",
                  style: "Urban",
                  calidad: "80% Algodón, 20% Poliéster",
                  talle: "S/M",
                  color: "Negro",
                  sku: "700020125628009",
                  precio: "$4.210",
                  detail1: "Capucha con cordón de ajuste.",
                  detail2: "Bolsillos laterales con cierre.",
                  detail3: "Cintura y puños elastizados.",
                  detail4: "Logo Nike bordado.",
                },
                {
                  id: "10",
                  image: remeraAllstar,
                  productName: "Remera",
                  marca: "All Star",
                  genero: "Femenino",
                  style: "Running",
                  calidad: "Algodon 100%",
                  talle: "S",
                  color: "Rojo",
                  sku: "7000201256280010",
                  precio: "$1.800",
                  detail1: "Completá tu look con un clásico que no pasa de moda.",
                  detail2: "El ajuste regular logra un equilibrio cómodo entre holgado y ajustado.",
                  detail3: "Presenta el logo Converse estampado.",
                  detail4: "Material: 100% Algodón, Industria Argentina",
                },
            ]
            res(products.find(i => i.id === id));
        },2000);
    });
}


function ItemDetailContainer({ tituloDetail }) {
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(null);
  const { id } = useParams();

  // Use effect
  useEffect(() => {
    setLoading(true);
    getDetailInfo(id).then((res) => {
      setLoading(false);
      setItemDetail(res);
    });
  }, []); // End useEffect
  console.log("res:" + res);

  return (
    <>
      <Spinner loading={loading} />
      <div className="containerDetail">
        <Row>
          <Col sm="2" xs="5">
          <Link class="regresar" to="/"> <ul>
              <li>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-arrow-left-square-fill"
           
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"
                  />
                </svg>
                Regresar
              </li>
            </ul>
            </Link>
          </Col>
          <Col sm="10">
            <h2>{tituloDetail}</h2>
          </Col>
        </Row>
        <Row>{itemDetail && <ItemDetail item={itemDetail} />}</Row>
      </div>
    </>
  );
}



export default ItemDetailContainer;