import styled from "styled-components";

export const Image = styled.div`
  @media only screen and (max-width: 768px) {
    height: 27rem;
    width: 30rem;
  }
`;
export const Responsive = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
export const CustomText = styled.h1`
  font-size: 42px;
  line-height: 55px;
  color: #fff;
  text-align: right;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
const StyleImage = () => {
  return <div>StyleImage</div>;
};

export default StyleImage;
