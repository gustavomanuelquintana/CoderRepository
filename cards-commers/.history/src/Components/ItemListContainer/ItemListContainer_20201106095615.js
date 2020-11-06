import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import remeraNike from "../../Images/remera-nike.jpg";
import remeraAdidas from "../../Images/remera-adidas.jpg";
import remeraPuma from "../../Images/remera-puma.jpg";
import remeraTopper from "../../Images/remera-topper.jpg";
import remeraUnder from "../../Images/remera-under.jpg";
import remeraAllstar from "../../Images/remera-allstar.jpg";

const getList = () => {
  return new Promise((res) => {
    setTimeout(() => {
      let products;
      res(
        (products = [
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
        ])
      );
    }, 2000);
  });
};

function ItemListContainer({ titulo }) {
  const [itemList, setItemList] = useState([]);
  

  // Use effect
  useEffect(() => {
    getList().then((mercaderia) => {
      setItemList(mercaderia);
    });
  }, []); // End useEffect

  return (
    <Container className="ItemListContainer">
      <Row>
        <Col sm="12">
          <h2>{titulo}</h2>
        </Col>
      </Row>
      <Row className="rowItemListContainer">
          <ItemList items={itemList} />
      </Row>
    </Container>
  );
}



export default ItemListContainer;