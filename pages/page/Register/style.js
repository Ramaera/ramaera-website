import styled from "styled-components"
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: -25vh;
  // width: 100%;
`
export const P = styled.p`
  font-weight: bold;
  margin-top: 5px;
`
export const Li = styled.li`
  list-style: circle;
`
export const FormBox = styled.form`
  background-color: whitesmoke;
  width: 35vw;
  min-width: 400px;
  height: 65vh;
  min-height: 450px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 0 0 10px rgb(0 0 0 / 27%);
  padding: 2rem;
  @media (max-width: 450px) {
    width: 100vw;
    min-width: unset;
  }
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
  gap: 30px;
  transition: all 0.5s;
`
export const LoginTitle = styled.div``
export const LoginTitlee = styled.div`
  display: flex;
`
export const Details = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 10px;
  font-size: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  width: 270px;
  right: -322px;
  text-align: left;
  top: -70px;
  display: none;
  &:hover {
    display: block;
  }
`
export const Access = styled.div`
  display: flex;
  margin: 0 10px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  height: 4.5rem;
  &:hover ${Details} {
    display: block;
  }
`
const StyleImage = () => {
  return <div>StyleImage</div>
}
export default StyleImage
