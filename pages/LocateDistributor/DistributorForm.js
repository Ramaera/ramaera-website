import Text from "@/components/Text/Text"
import PageWidth from "@/components/Width/PageWidth"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  margin: 5rem 1rem;
  border-radius: 0.5rem;
  max-width: max-content;
  @media (max-width: 500px) {
    width: 100vw;
    padding: 1.5rem;
  }
`
const Form = styled.form`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const FlexCol = styled.form`
  display: flex;
  flex-direction: column;
`

const H2 = styled.h2`
  margin: 50px 0;
`
const Details = styled.table`
  position: static;
  border-collapse: collapse;
  width: 100%;
  @media (max-width: 768px) {
    border: hidden;
  }
`
const Tr = styled.tr`
  width: 100px;
`
const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  @media (max-width: 768px) {
    border: hidden;
    font-size: 15px;
  }
`

const DistributorForm = () => {
  const [aState, setAState] = useState("")
  const [district, setDistrict] = useState("")
  useEffect(() => {
    console.log(district)
  }, [district])
  return (
    <PageWidth full scale={"95%"} width="1500px" position="relative">
      <Container>
        <Text
          Text="Locate a Distributor"
          lg="linear-gradient(to right, #ffa73d, gold)"
          font
          size="clamp(3rem, 1.5vw, 2rem)"
          fw="400"
          align="center"
          lh="50px"
          m="0 0 1rem 0"
          xmsize="clamp(2.4rem, 1.5vw, 2rem)"
          xssize="clamp(2.4rem, 1.5vw, 2rem)"
          msize="1.7rem"
          mwidth="100%"
          mmwidth="100%"
          padding="0"
          mpadding="0"
          mta="center"
          mlh="unset"
        />
        <Form>
          <FlexCol>
            <label>Choose State</label>
            <select
              value={aState}
              onChange={(e) => {
                setAState(e.target.value)
              }}
            >
              {!aState && (
                <option disabled value={""} selected={!aState}>
                  Select state
                </option>
              )}
              <option value="Bihar">Bihar</option>
              <option value="Telangana">Telangana</option>
            </select>
          </FlexCol>
          <FlexCol>
            <label>Choose Area</label>
            <select
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value)
              }}
            >
              {!district && (
                <option disabled value={""} selected={!district}>
                  Select Area
                </option>
              )}
              {aState === "Bihar" && (
                <>
                  <option value="Gopalganj">Gopalganj</option>
                  <option value="Hajipur">Hajipur</option>
                  <option value="Mahua">Mahua (Vaishali)</option>
                  <option value="Mahnar">Mahnar (Vaishali)</option>
                </>
              )}
              {aState === "Telangana" && (
                <>
                  <option value="Hyderabad">Hyderabad</option>
                </>
              )}
            </select>
          </FlexCol>
        </Form>
        {district ? (
          <H2>Distributor Details</H2>
        ) : (
          <div style={{ height: "50px" }}></div>
        )}
        {district === "Gopalganj" && (
          <Details>
            <Tr>
              <Td>Name of Business</Td>
              <Td>Sonali Enterprises</Td>
            </Tr>
            <Tr>
              <Td>Name Of the Proprietor</Td>
              <Td>Prabhakar Tiwari</Td>
            </Tr>

            <Tr>
              <Td>Mobile No.</Td>
              <Td>9523038408</Td>
            </Tr>
            <Tr>
              <Td>Firm Type</Td>
              <Td>Distributor</Td>
            </Tr>
            <Tr>
              <Td>Zone</Td>
              <Td>Zone 2 </Td>
            </Tr>
            <Tr>
              <Td>Address Of Business</Td>
              <Td>Bhore, Chaarmuhani near Chahat, 841426</Td>
            </Tr>
            <Tr>
              <Td>Email Id</Td>
              <Td>prabhakart774@gmail.com</Td>
            </Tr>
          </Details>
        )}
        {district === "Hajipur" && (
          <Details>
            <Tr>
              <Td>Name of Business</Td>
              <Td>JEET TELECOM</Td>
            </Tr>

            <Tr>
              <Td>Name Of the Proprietor</Td>
              <Td>KAMAL JEET CHOUDHARY</Td>
            </Tr>
            <Tr>
              <Td>Mobile No.</Td>
              <Td>9905640570</Td>
            </Tr>
            <Tr>
              <Td>Firm Type</Td>
              <Td>Distributor</Td>
            </Tr>
            <Tr>
              <Td>Zone</Td>
              <Td>Zone 2 </Td>
            </Tr>
            <Tr>
              <Td>Address Of Business</Td>
              <Td>BAGMALI HAJIPUR VAISHALI 844101</Td>
            </Tr>
            <Tr>
              <Td>Email Id</Td>
              <Td>kamaljeetchoudhary93962@gmail.com</Td>
            </Tr>
          </Details>
        )}
        {district === "Mahua" && (
          <Details>
            <Tr>
              <Td>Name of Business</Td>
              <Td>Vaishnavi Enterprises</Td>
            </Tr>

            <Tr>
              <Td>Name Of the Proprietor</Td>
              <Td>Mr. Lalan Kumar</Td>
            </Tr>
            <Tr>
              <Td>Mobile No.</Td>
              <Td>9491553215</Td>
            </Tr>
            <Tr>
              <Td>Firm Type</Td>
              <Td>Distributor</Td>
            </Tr>
            <Tr>
              <Td>Zone</Td>
              <Td>Zone 1</Td>
            </Tr>
            <Tr>
              <Td>Address Of Business</Td>
              <Td>Ward no-6, Chhatwara(Mahua), 844122</Td>
            </Tr>
            <Tr>
              <Td>Email Id</Td>
              <Td>lkumar94915@gmail.com</Td>
            </Tr>
          </Details>
        )}
        {district === "Mahnar" && (
          <Details>
            <Tr>
              <Td>Name of Business</Td>
              <Td>Shiv shakti Enterprises</Td>
            </Tr>

            <Tr>
              <Td>Name Of the Proprietor</Td>
              <Td>Mr. Santosh Kumar Singh</Td>
            </Tr>
            <Tr>
              <Td>Mobile No.</Td>
              <Td>7209438100</Td>
            </Tr>
            <Tr>
              <Td>Firm Type</Td>
              <Td>Distributor</Td>
            </Tr>
            <Tr>
              <Td>Zone</Td>
              <Td>Zone 1</Td>
            </Tr>
            <Tr>
              <Td>Address Of Business</Td>
              <Td>
                STATION ROAD, MAHNAR , VAISHALI , BIHAR Near Chuda mill, 844506
              </Td>
            </Tr>
            <Tr>
              <Td>Email Id</Td>
              <Td>sshakitenterprises97@gmail.com</Td>
            </Tr>
          </Details>
        )}
        {district === "Hyderabad" && (
          <Details>
            <Tr>
              <Td>Name of Business</Td>
              <Td>Limra Enterprises</Td>
            </Tr>

            <Tr>
              <Td>Name Of the Proprietor</Td>
              <Td>Mr. MIR Mubashir Ali</Td>
            </Tr>
            <Tr>
              <Td>Mobile No.</Td>
              <Td>9542517864</Td>
            </Tr>
            <Tr>
              <Td>Firm Type</Td>
              <Td>Distributor</Td>
            </Tr>
            <Tr>
              <Td>Zone</Td>
              <Td>South</Td>
            </Tr>
            <Tr>
              <Td>Address Of Business</Td>
              <Td>
                17-2-1198/8, Jawawhar pura, Charminar, Yakulpura, Hyderabad,
                Telangana, 500023
              </Td>
            </Tr>
            <Tr>
              <Td>Email Id</Td>
              <Td>mirmubashirali333@gmail.com</Td>
            </Tr>
          </Details>
        )}
      </Container>
    </PageWidth>
  )
}

export default DistributorForm
