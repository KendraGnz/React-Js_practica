// import prueba

import usuario from "./view/usuario"
import {col, row} from "antd";
function App() {
  return (
    <>
      
      <usuario nombreUsuario={"kendra"} apellidoUsuario={"Godinez"} level={1}/>
     <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
      
    </>
  )
}

export default App;
 