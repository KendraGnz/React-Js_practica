import { Typography } from "antd";
const {title} = Typography
const usuario =({nombreUsuario,apellidoUsuario}) => {
    console.log(nombreUsuario)
    const usuarioPerfil ="Kendra Godinez";
    return (
       <>
       
            <Title >{usuarioPerfil}</Title>
            <title level={3}>Hola, {nombreUsuario} {apellidoUsuario}</title>
       
    </>
    )
}

export default usuario;