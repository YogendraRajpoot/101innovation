import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import CloseIcon from "@mui/icons-material/Close";
// import { addButton, cardClicked, NewWord } from "../../Redux/Action/action";

const PopUpModal = styled.div`
  border: 2px solid black;
  background: transparent;
  margin-top: 7vh;
  width: 90%;
  height: 90vh;
  margin-left: auto;
  margin-right: auto;
  overflow: scroll;
  .buttonDiv {
    background: transparent;
    border: 2px solid black;
    padding: 5vh;
  }
  .tableDiv {
    padding: 2%;
  }
`;

const TableWrapper = styled.table`
  border: 2px solid;
  background: transparent;
  width: 100%;
  td {
    width: 50%;
    border: 2px solid;
    text-align: center;
  }
`;

export const FoodDetail = (props) => {
  //   const d = useSelector((state) => state.card);
  const data = props.singleItem;
  console.log("72", data);
  //   const dispatch = useDispatch();
  function onClick() {
    props.setIsShow(false);
    console.log("140", props.isShow);
    //   dispatch(cardClicked(false));
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
          {/* <thead>
            <tr>
              <th>one</th>
              <th>one</th>
            </tr>
          </thead> */}
          <tbody>
            {Object.entries(data).map(([key, values]) => (
              <tr>
                <td>{key}</td>
                {key === "url" ? (
                  <td>
                    <a href={values}>Link</a>
                  </td>
                ) : (
                  <td>{values}</td>
                )}
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      </div>
    </PopUpModal>
    // </Wrapper>
  );
};
