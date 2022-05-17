import styled from '@emotion/styled'
const Resultado = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  
  const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem
    margin-top: 30px;

  `

  const Texto = styled.p`
    font-size: 18px;
    span{
      font-weight: 700;
    }
  `

  const Precio = styled.p`
    font-size: 24px;
      span{
        font-weight: 700;
      }
  `

  const Imagen = styled.img`
  display:block;
  width: 120px;
  `
  
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="IMAGEN" />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>

  )
}

export default Resultado