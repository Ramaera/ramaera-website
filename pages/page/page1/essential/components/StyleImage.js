import styled from "styled-components"

export const Image = styled.div`
  height: 25rem;
  width: 35rem;
  @media only screen and (max-width: 768px) {
    height: 27rem;
    width: 35rem;
    margin-top: -10%;
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
