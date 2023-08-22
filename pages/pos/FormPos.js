import styled from "styled-components"
import Text from "../../components/Text/Text"
import Button from "../../components/Button/SubmitButton"
import { useState } from "react"

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 450px) {
    justify-content: center;
    width: 90%;
  }
`
export const Container = styled.div`
  background: white;
  width: 80vw;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.5rem;
  @media (max-width: 500px) {
    width: 100vw;
    padding: 1.5rem;
  }
`
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const FormInput = styled.div`
  width: 45%;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const FormPos = ({ title }) => {
  const [posData, setPosData] = useState({
    name: "",
    number: "",
    email: "",
    pwid: "",
    persons: "",
    city: "",
  })
  return (
    <Container>
      <Text
        Text="Ramaera Industries"
        lg="linear-gradient(to right, #ffa73d, gold)"
        font
        size="clamp(3.6rem, 1.5vw, 2rem)"
        fw="400"
        align="center"
        lh="50px"
        m="0 0 1rem 0"
        xmsize="clamp(2.4rem, 1.5vw, 2rem)"
        xssize="clamp(2.4rem, 1.5vw, 2rem)"
        msize="2rem"
        mwidth="100%"
        mmwidth="100%"
        padding="0"
        mpadding="0"
        mta="center"
        mlh="unset"
      />
      <Text
        Text={title}
        lg="linear-gradient(to right, #000, #000)"
        font
        size="clamp(2.4rem, 1.5vw, 2rem)"
        fw="200"
        align="center"
        lh="50px"
        m="0 0 2rem 0"
        xmsize="clamp(2.4rem, 1.5vw, 2rem)"
        xssize="clamp(2.4rem, 1.5vw, 2rem)"
        msize="2rem"
        mwidth="100%"
        mmwidth="100%"
        padding="0"
        mpadding="0"
        mta="center"
        mlh="unset"
      />
      <Form>
        <FormInput>
          <label>Name</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) =>
              setPosData((val) => ({ ...val, name: e.target.value }))
            }
            placeholder="Type your name"
          />
        </FormInput>
        <FormInput>
          <label>Contact number</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) =>
              setPosData((val) => ({ ...val, number: e.target.value }))
            }
            placeholder="Type your contact number"
          />
        </FormInput>
        <FormInput>
          <label>Email ID</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) =>
              setPosData((val) => ({ ...val, email: e.target.value }))
            }
            placeholder="Type your Email ID"
          />
        </FormInput>
        <FormInput>
          <label>PW ID</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) =>
              setPosData((val) => ({ ...val, pwid: e.target.value }))
            }
            placeholder="Type your PW ID"
          />
        </FormInput>
        <FormInput>
          <label>Number of persons in your POS City</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) =>
              setPosData((val) => ({ ...val, persons: e.target.value }))
            }
            placeholder="Type number of person in POS City"
          />
        </FormInput>
        <FormInput>
          <label>City Name</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) =>
              setPosData((val) => ({ ...val, city: e.target.value }))
            }
            placeholder="Type City name"
          />
        </FormInput>
        <ButtonContainer>
          <button
            style={{ background: "none", border: "none" }}
            onClick={(e) => {
              e.preventDefault()
              console.log(posData)
            }}
          >
            <Button
              nav
              width="140px"
              height="2.75rem"
              Text="Submit"
              inheight="2.5rem"
            />
          </button>
        </ButtonContainer>
      </Form>
    </Container>
  )
}

export default FormPos
