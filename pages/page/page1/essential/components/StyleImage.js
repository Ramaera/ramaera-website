import styled from "styled-components"

export const Image = styled.div`
  height: 25rem;
  width: 35rem;
  video {
    height: 120%;
    width: 120%;
    padding-right: 200px;
  }
  @media only screen and (max-width: 768px) {
    video {
      padding-right: 0;
      margin-top: 200px;
      height: 100%;
      width: 100%;
    }
  }
  @media only screen and (max-width: 400px) {
    video {
      height: 100%;
      width: 100%;
    }
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
