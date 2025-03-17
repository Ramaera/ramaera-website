import React, { useState } from "react";
import Box from "@mui/material/Box";
import Text from "../../../components/Text/Text";
import Link from "next/link";
import Settings from "../Dashboard/Settings";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";
import Button from "../../../components/Button/SubmitButton";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_DAILY_SALE, GET_SALES_OF_MART } from "apollo/queries/Mart";
import { type } from "os";
import { typeOf } from "react-animated-3d-card";
const BillingAmountAgraPage = () => {
  const [createDailySale] = useMutation(CREATE_DAILY_SALE);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [paymentDetails, setPaymentDetails] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const { data, loading, error } = useQuery(GET_SALES_OF_MART, {
    variables: {
      martName: "AGRA",
    },
  });

  const details = data?.SalesOfMart.filter(
    (list) =>
      list.saleDate.split("T")[0] == selectedDate.toISOString().split("T")[0]
  );

  const billDetails = details?.length > 0 ? details : [0, 1, 2, 3];

  console.log("bil", billDetails);

  const handlePaymentMethodChange = (event, index) => {
    const newPaymentDetails = [...paymentDetails];
    newPaymentDetails[index] = {
      ...newPaymentDetails[index],
      type: event.target.value,
    };
    setPaymentDetails(newPaymentDetails);
  };

  const handleAmountChange = (event, index) => {
    const newPaymentDetails = [...paymentDetails];
    newPaymentDetails[index] = {
      ...newPaymentDetails[index],
      amount: event.target.value,
    };
    setPaymentDetails(newPaymentDetails);
  };

  const handleSubmit = async () => {
    try {
      paymentDetails.map(
        async (paymentData) =>
          await createDailySale({
            variables: {
              martName: "AGRA",
              amount: parseInt(paymentData.amount),
              paymentMethod: paymentData.type,
              saleDate: selectedDate,
            },
          })
      );
    } catch (err) {
      console.log("err", err);
    }
  };

  const ACCESSTOKEN = window.localStorage.getItem("accessToken");
  if (!ACCESSTOKEN) {
    return (
      <>
        <Link
          style={{
            color: "white",
          }}
          href=" /Login"
        >
          Login to continue
        </Link>
      </>
    );
  }

  return (
    <>
      <div>
        <Text
          Text="Billing Amount Agra Mart"
          lg="linear-gradient(to right, #ffa73d, gold)"
          font
          size="clamp(2.2rem, 1.2vw, 1.5rem)"
          fw="400"
          align="center"
          lh="50px"
          m="0 0 1rem 0"
          xmsize="clamp(2.4rem, 1.5vw, 2rem)"
          xssize="clamp(2.4rem, 1.5vw, 2rem)"
          msize="2rem"
          mwidth="100%"
          padding="0"
          mpadding="0"
          mta="center"
          mlh="unset"
        />

        <div
          style={{
            color: "white",
            fontSize: "50px",
            right: "5%",
            top: "20px",
            zIndex: "10",
            position: "absolute",
            cursor: "pointer",
          }}
        >
          <Settings />
        </div>

        <Box className="boxGirdBilling">
          <Typography>Select Date</Typography>
          <Box display={"flex"} alignItems={"center"}>
            <div
              style={{
                position: "relative",
                marginRight: "20px",
                zIndex: 999,
              }}
            >
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div style={{}}>
              {selectedDate.getDate() === new Date().getDate() && (
                <button
                  style={{ background: "none", border: "none" }}
                  type="submit"
                >
                  <Button
                    nav
                    width="auto"
                    height="auto"
                    Text="Edit"
                    inheight="auto"
                    fontSize="auto"
                    padding="5px 20px"
                  />
                </button>
              )}
            </div>
          </Box>

          <TableContainer component={Paper} sx={{ marginY: 2 }}>
            <Table>
              <TableHead sx={{ background: "#fcb133" }}>
                <TableRow>
                  <TableCell>Payment Method</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {billDetails.map(
                  (data, index) => (
                    console.log(data),
                    (
                      <TableRow key={data.paymentMethod}>
                        <TableCell>
                          <FormControl fullWidth>
                            <InputLabel
                              disabled={data.paymentMethod}
                              id="payment-type-label"
                            >
                              {data.paymentMethod
                                ? data.paymentMethod
                                : "Select Payment"}
                            </InputLabel>
                            <Select
                              labelId={`payment-type-label-${index}`}
                              id="payment-type"
                              label="payment-type-label"
                              disabled={data.paymentMethod}
                              value={
                                (paymentDetails[index] &&
                                  paymentDetails[index].type) ||
                                ""
                              }
                              onChange={(event) =>
                                handlePaymentMethodChange(event, index)
                              }
                              style={{ minWidth: 150 }}
                            >
                              <MenuItem value="UPI">UPI</MenuItem>
                              <MenuItem value="Cash">Cash</MenuItem>
                              <MenuItem value="Card">Card</MenuItem>
                              <MenuItem value="Others">Others</MenuItem>
                            </Select>
                          </FormControl>
                        </TableCell>
                        <TableCell>
                          <TextField
                            type="number"
                            placeholder="Enter Amount"
                            disabled={data.amount}
                            value={
                              data.amount
                                ? data.amount
                                : (paymentDetails[index] &&
                                    paymentDetails[index].amount) ||
                                  ""
                            }
                            onChange={(event) =>
                              handleAmountChange(event, index)
                            }
                          />
                        </TableCell>
                      </TableRow>
                    )
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <button
            style={{ background: "none", border: "none" }}
            type="submit"
            onClick={handleSubmit}
          >
            <Button
              width="auto"
              height="auto"
              Text="Submit"
              inheight="auto"
              fontSize="auto"
            />
          </button>
        </Box>
      </div>
    </>
  );
};

export default BillingAmountAgraPage;
