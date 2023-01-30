import styled from "styled-components"
import Text from "../../../../components/Text/Text"

const Map = () => {
  const Div = styled.div`
    display: flex;
    padding-bottom: 220px;
    align-items: center;
    flex-direction: column;
    width: 20vw;
    margin-left: 2rem;
    margin-bottom: 100px;
  `
  const Image = styled.img`
    height: 200px;
  `
  return (
    <Div>
      <Image src="/content/map.png" />
    </Div>
  )
}

export default Map
