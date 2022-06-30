import React from "react";
import styled from "styled-components";

const PopUpModal = styled.div`
  border: 2px solid black;
  background: transparent;
  margin-top: 7vh;
  width: 90%;
  height: 90vh;
  margin-left: auto;
  margin-right: auto;
  .buttonDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    border: 2px solid black;
    padding: 2vh;
  }
  .buttonDiv p {
    font-weight: 600;
    font-size: 1vw;
    @media screen and (max-width: 1200px) {
      font-size: 2vw;
      font-weight: 0;
    }
    @media screen and (max-width: 1000px) {
      font-size: 3vw;
      font-weight: 0;
    }
    @media screen and (max-width: 550px) {
      font-size: 4vw;
      font-weight: 0;
    }
  }
  .tableDiv {
    padding: 2%;
  }
`;

const TableWrapper = styled.div`
  border: 2px solid;
  background: transparent;
  width: 100%;
  height: 70vh;
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
    @media screen and (max-width: 1200px) {
      font-size: 2vw;
      font-weight: 0;
    }
    @media screen and (max-width: 1000px) {
      font-size: 2.5vw;
      font-weight: 0;
    }
    @media screen and (max-width: 550px) {
      font-size: 3vw;
      font-weight: 0;
    }
  }
`;

export const FoodDetail = (props) => {
  const data = props.singleItem; //store all data of single item
  function onClick() {
    // function for closing the page
    props.setIsShow(false); // update prop.setIsShow with false so that page will close
  }

  return (
    <PopUpModal>
      <div className="buttonDiv">
        <div>
          <p>{data.product_name}</p>
          <p>({data.generic_name})</p>
        </div>
        {/* closing button for closing the page */}
        <button onClick={onClick}>X</button>
      </div>
      <div className="tableDiv">
        {/* display all item in table */}
        <TableWrapper>
          <table>
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
  );
};
