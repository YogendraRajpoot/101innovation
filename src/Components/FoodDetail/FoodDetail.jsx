import React, { useState } from "react";
import styled from "styled-components";

const PopUpModal = styled.div`
  border: 2px solid black;
  background: transparent;
  margin-top: 7vh;
  width: 90%;
  height: 90vh;
  margin-left: auto;
  margin-right: auto;
  // overflow: scroll;
  .buttonDiv {
    background: transparent;
    border: 2px solid black;
    padding: 4vh;
  }
  .tableDiv {
    padding: 2%;
  }
`;

const TableWrapper = styled.div`
  border: 2px solid;
  background: transparent;
  width: 100%;
  height: 76vh;
  overflow: scroll;
  table {
    width: 100%;
  }
  td {
    font-weight: 600;
    font-size: 1vw;
    // margin-top: 5%;
    height: 5vh;
    width: 50%;
    border: 2px solid;
    text-align: center;
  }
`;

export const FoodDetail = (props) => {
  const data = props.singleItem;
  console.log("72", data);
  function onClick() {
    props.setIsShow(false);
    console.log("140", props.isShow);
  }

  return (
    // <>
    //   <div>header</div>
    // </>
    // <Wrapper>
    <PopUpModal>
      <div className="buttonDiv">
        <button style={{ float: "right" }} onClick={onClick}>
          X{/* <CloseIcon /> */}
        </button>
      </div>
      <div className="tableDiv">
        <TableWrapper>
          <table>
            {/* <thead>
            <tr>
              <th>one</th>
              <th>one</th>
              </tr>
            </thead> */}
            <tbody>
              {Object.entries(data).map(([key, values]) => (
                <tr>
                  <td>{key.toUpperCase()}</td>
                  {key === "url" ? (
                    <td>
                      <a href={values}>Link</a>
                    </td>
                  ) : values === null ? (
                    <td>Null</td>
                  ) : (
                    <td>{values}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrapper>
      </div>
    </PopUpModal>
    // </Wrapper>
  );
};
