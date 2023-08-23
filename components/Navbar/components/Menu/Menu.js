import React, { useState } from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./Menu.styled"
import styled from "styled-components"
import Link from "next/link"
import Button from "../../../Button/Button"

const MenuItems = styled.div`
  display: grid;
  place-items: center;
  margin-top: 5rem;
`

const Link1 = styled.div`
  display: flex;
  margin: 0 2rem;
  align-items: center;
  text-decoration: none;
  color: #fff;
  position: absolute;
  left: 2rem;
  top: 1rem;
  width: 3rem;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem 0;
  align-items: center;
`

const T = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  margin-top: 1rem;
  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`

const H = styled.div`
  font-size: 1.5rem;
  text-align: left;

  font-weight: bold;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  color: #000;
`

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1
  if (typeof window !== "undefined") {
    if (open) {
      document.body.classList.add("fixed-position")
    } else if (!open) {
      document.body.classList.remove("fixed-position")
    }
  }
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link1 spy={true} smooth={true}></Link1>

      <MenuItems>
        <H>
          <Link href="/" onClick={() => setOpen(false)}>
            HOME
          </Link>
        </H>
        <H>
          <Link href="/Industries" onClick={() => setOpen(false)}>
            OUR INDUSTRIES
          </Link>
        </H>
        <H>
          <Link href="/Companies" onClick={() => setOpen(false)}>
            OUR COMPANIES
          </Link>
        </H>
        {/* <H>
          <Link href="/OurBrands">OUR BRANDS</Link>
        </H> */}
        <div style={{}}>
          <a
            style={{
              fontSize: "14px",
              padding: "5px",
              background: "#f9b223",
              borderRadius: "5px",
              marginRight: "5px",
            }}
            href="https://planetsera.com/"
            target="_blank"
          >
            PLANETSERA
          </a>

          <a
            style={{
              fontSize: "14px",
              padding: "5px",
              background: "#f9b223",
              borderRadius: "5px",
              marginRight: "5px",
            }}
            href="https://hednor.com/"
            target="_blank"
          >
            HEDNOR
          </a>

          <a
            style={{
              fontSize: "14px",
              padding: "5px",
              background: "#f9b223",
              borderRadius: "5px",
            }}
            href="https://www.groceryworld.in/"
            target="_blank"
          >
            GROCERYWORLD
          </a>
        </div>
        <H>
          <Link href="/SubmitProject">SUBMIT YOUR IDEAS</Link>
        </H>
        {/* <H>
          <Link href="/ContactUs" onClick={() => setOpen(false)}>
            CONTACT US
          </Link>
        </H> */}
        <H>
          <Link
            href="/LocateDistributor"
            onClick={() => setOpen(false)}
            style={{ textAlign: "center" }}
          >
            STOCKIST & DISTRIBUTOR
          </Link>
        </H>

        <Link target="_blank" href="https://kyc1.ramaera.com">
          <Button
            nav
            width="20px"
            height="4rem"
            Text="Ramaera Subscriber Login"
            inheight="2.5rem"
          />
        </Link>
      </MenuItems>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
