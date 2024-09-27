import styled from "styled-components"

export const bg = "/background/blank.png"

export const CustomText = styled.h1`
  font-size: 20px;
  line-height: 39px;
  color: #fff;
  line-height: 42px;
  font-weight: 600;
  padding-right: 120px;
  margin: 3rem 0;
  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
    margin: 0;
  }
  @media only screen and (max-width: 450px) {
    transform: scale(0.9);
  }
`
export const Responsive = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0 0 0;
`
export const ResponsiveLeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0 0 0;
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`

const Style = () => {
  return <div>StyleImage</div>
}

export default Style
