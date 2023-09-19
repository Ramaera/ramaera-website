import { FormWrapper } from "./FormWrapper";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { SALES_ENQUIRY } from "apollo/queries/salesEnquiry";
import Button from "@/components/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonContainer } from "./allJobStyle.js";
import styled from "styled-components";

import { useEffect, useState } from "react";

export const ImageEnq = styled.img`
  transform: scale(90%);
  width: 150px;
  object-fit: cover;
  object-position: 0 0;
  border-radius: 20px;
  border: solid white 1px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  //background: #000;
  background: #fff;
  @media (max-width: 768px) {
    object-fit: contain;
    height: auto;
  }
`;

export const ProductImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  align-content: flex-end;
  margin-right: -10%;
  @media (max-width: 768px) {
    align-content: center;
    width: 90vw;
    margin-right: unset;
  }
`;

export function VisitForm({ ProImg, ProName }) {
  const [clickOnce, setClickOnce] = useState(0);
  const [createSalesEnquiryForm] = useMutation(SALES_ENQUIRY);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [remarks, setRemarks] = useState("");
  const [qty, setQty] = useState(0);
  const [product, setProduct] = useState(ProName);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(
        "sales output",
        email,
        mobile,
        name,
        address,
        product,
        remarks,
        product
      );

      await createSalesEnquiryForm({
        variables: {
          email: email,
          mobileNumber: mobile,
          name: name,
          quantity: qty,
          product: product,
          remarks: remarks,
          address: address,
        },
      });

      toast.success(`Your Response has been submitted ! `, {
        position: "bottom-center",
        autoClose: 3500,
        style: { width: "320px", margin: "25px" },
        fontFamily: "monospace",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      //setClickOnce(2)
      clearForm();
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 3500,
        style: { width: "350px", margin: "25px" },
        fontFamily: "monospace",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const clearForm = () => {
    setTimeout(() => {
      location.reload();
    }, "4200");
  };

  const dispatch = useDispatch();

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <ToastContainer
        toastClassName="toast-font"
        style={{
          width: "600px",
          textAlign: "center",
          fontFamily: "Sans-serif,Times New Roman, Serif,Patrick Hand, cursive",
        }}
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <FormWrapper title="Product Enquiry">
        <ProductImg>
          <ImageEnq src={ProImg} />
          <h3 style={{ color: "#ffa73d" }}>{ProName}</h3>
        </ProductImg>

        <div style={{ width: "450px" }}></div>
        <hr className="lineHr1" />
        <hr className="lineHr2" />

        <div style={{ width: "500px" }}>
          <label>Name</label>
          <br />
          <input
            placeholder="Name"
            required
            text
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Email</label>
          <br />
          <input
            required
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Phone Number</label>
          <br />
          <input
            placeholder="Phone Number"
            required
            type="number"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Number Of Quantity</label>
          <br />

          <select
            required
            onChange={(e) => {
              setQty(e.target.value);
            }}>
            <option value={""} disabled selected>
              Number Of Quantity
            </option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
            <option value={"6"}>6</option>
            <option value={"7"}>7</option>
            <option value={"8"}>8</option>
            <option value={"9"}>9</option>
            <option value={"10"}>10</option>
            <option value={"more"}>More</option>
            {/* <option value={"11"}>11</option>
            <option value={"12"}>12</option>
            <option value={"13"}>13</option>
            <option value={"14"}>14</option>
            <option value={"15"}>15</option>
            <option value={"16"}>16</option>
            <option value={"17"}>17</option>
            <option value={"18"}>18</option>
            <option value={"19"}>19</option>
            <option value={"20"}>20</option> */}
          </select>
        </div>
        <div style={{ width: "500px" }}>
          <label>Address</label>
          <br />
          <textarea
            required
            rows={6}
            cols={80}
            type="text"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="Address"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Remarks</label>
          <br />
          <textarea
            required
            rows={6}
            cols={80}
            type="text"
            onChange={(e) => {
              setRemarks(e.target.value);
            }}
            placeholder="Remarks "
          />
        </div>
      </FormWrapper>
      <ButtonContainer>
        <button style={{ background: "none", border: "none" }} type="submit">
          <Button
            nav
            width="140px"
            height="2.75rem"
            Text="Submit"
            inheight="2.5rem"
          />
        </button>
      </ButtonContainer>
    </form>
  );
}

export default VisitForm;
