import styled from "styled-components"

export const Image = styled.div`
  transform: scale(0.85);
  height: 25rem;
  width: 35rem;
  @media only screen and (max-width: 768px) {
    transform: scale(0.65);
    width: 90%;
    height: 100%;
    margin-top: -25%;
  }
`
export const Responsive = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`
const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
