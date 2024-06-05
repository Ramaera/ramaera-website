import React from "react";
import styled from "styled-components";
import data from "./AcData";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Text from "../../../../components/Text/Text";

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #2f2e2e;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    color: white;
    background-color: ${(props) => (props.dark ? "black" : "#2f2e2e")};
  }
`;

const TableComponent = () => {
  return (
    <>
      <Text
        Text="Technical Specification 3 Star/5 Star"
        lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
        size="32px"
        lh="40px"
        width="100%"
        mwidth="100%"
        fw="500"
        // mlh="50px"
        align="center"
        xmsize="1.5rem"
        xssize="2vw"
        msize="1.2rem"
        padding="1vw 0vw"
        mpadding="0 1%"
        mmargin=" 0 0 0rem 0"
      />
      <TableContainer
        component={Paper}
        sx={{
          width: "96%",
          margin: "auto",
          border: "1px solid white",
        }}>
        <Table aria-label="customized table">
          <TableHead
            sx={{
              background: "linear-gradient(90deg, #ffe259 0%, #ffa751 100%)",
            }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 800, minWidth: 100 }}>
                SPECIFICATION
              </TableCell>
              <TableCell sx={{ fontWeight: 800, minWidth: 150 }}>
                1.0 TON | 3 STAR
              </TableCell>
              <TableCell sx={{ fontWeight: 800, minWidth: 150 }}>
                1.0 TON | 5 STAR
              </TableCell>
              <TableCell sx={{ fontWeight: 800, minWidth: 150 }}>
                1.5 TON | 3 STAR
              </TableCell>
              <TableCell sx={{ fontWeight: 800, minWidth: 150 }}>
                1.5 TON | 5 STAR
              </TableCell>
              <TableCell sx={{ fontWeight: 800, minWidth: 150 }}>
                2.0 TON | 3 STAR
              </TableCell>
              <TableCell sx={{ fontWeight: 800, minWidth: 150 }}>
                2.0 TON | 5 STAR
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell dark>MODEL</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.model}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>COOLING CAPACITY</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>
                  {row.cooling_capacity}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>POWER</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.power}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>ISEER</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>{row.iseer}</StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>STAR</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.star}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>VOLTAGE</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>{row.voltage}</StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>SPEED(Turbo/Hi/Mi/Lo)</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.speed}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>FIN COLOR</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>{row.fin_color}</StyledTableCell>
              ))}
            </StyledTableRow>{" "}
            <StyledTableRow>
              <StyledTableCell dark>TUBE DIAMETER</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.tube_diameter}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>IDU AIR FLOW-TURBO</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>
                  {row.idu_air_flow_turbo}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>ODU-FAN SPPED</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.odu_fan_speed}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>CONDENSER ROW</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>
                  {row.condenser_row}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark> CONDENSER TUBE DIA</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.condenser_tube_dia}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>CONDENSER FIN COLOR</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>
                  {row.condenser_fin_color}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>IDU NOISE LEVEL</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.idu_noise_level}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>ODU NOISE LEVEL</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>
                  {row.odu_noise_level}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>REFRIGERANT TYPE</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.refrigerant_type}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>PM 2.5 FILTER</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>{row.pm_filter}</StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>TEMPERATURE DISPLAY</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.temperature_display}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>SELF DIAGNOSIS</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>
                  {row.self_diagnosis}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>AUTO RESTART</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.auto_restart}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>HYDROFILIC FINS</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>
                  {row.hydrophilic_fins}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>SLEEP MODE</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.sleep_mode}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>REMOTE WITH BACKLIGHT</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>
                  {row.remote_blacklight}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>AUTO PROTECTION</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.auto_protection}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>TIMER</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>{row.timer}</StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>DRY MODE</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.dry_mode}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>TURBO MODE</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>{row.turbo_mode}</StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>ENERGY SAVER</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.energy_saver}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>ANTI VIRAL FILTER</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>
                  {row.anti_viral_filter}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>4-WAY SWING</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.swing_4_way}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>4-WAY CONVERTIBLE</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>
                  {row.convertiable_4_way}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell dark>ANTI-RUST COATING</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index} dark>
                  {row.anti_rust_coating}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>INVERTER</StyledTableCell>
              {data.map((row, index) => (
                <StyledTableCell key={index}>{row.inverter}</StyledTableCell>
              ))}
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableComponent;
