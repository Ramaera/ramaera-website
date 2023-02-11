import styled from "styled-components"

export const Image = styled.div`
  height: 27rem;
  width: 30rem;
`
export const Responsive = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const CustomText = styled.h1`
  font-size: 42px;
  line-height: 55px;
  color: #fff;
  text-align: right;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
    text-align: center;
  }
`
const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
