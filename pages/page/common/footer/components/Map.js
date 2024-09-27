import styled from "styled-components"

const MapContainer = styled.a`
  display: flex;
  padding-bottom: 140px;
  align-items: center;
  flex-direction: column;
  //width: 20vw;
  /*   margin-left: 2rem;*/
  margin-bottom: 100px;
  @media only screen and (max-width: 450px) {
    margin-bottom: 0px;
  }
`
const Image = styled.iframe`
  border: 3px solid #959595;
  border-radius: 20px;
  overflow: hidden;
  width: 500px;
  height: 300px;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 210px;
  }
`

const Map = () => {
  return (
    <MapContainer href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.121357850357!2d77.37442991604617!3d28.62612468242031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5422cddcbd5%3A0xfabca9cd7a99f34d!2sRamaera%20Industries%20Ltd!5e0!3m2!1sen!2sin!4v1676369134463!5m2!1sen!2sin">
      <Image
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7004.306681470596!2d77.375918!3d28.625166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5422cddcbd5%3A0xfabca9cd7a99f34d!2sRamaera%20Industries%20Ltd!5e0!3m2!1sen!2sin!4v1679897392722!5m2!1sen!2sin"
        width="500"
        height="300"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></Image>

      {/* width={310} height={250} style={{"marginTop":"10","border":"0"}} */}
    </MapContainer>
  )
}

export default Map
