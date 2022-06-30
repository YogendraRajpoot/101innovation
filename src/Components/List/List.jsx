import React, { useEffect, useState } from "react";
import "./list.css";
import Icon from "../../Image/icon.png";
import { FoodDetail } from "../FoodDetail/FoodDetail";

export const List = () => {
  const [isShow, setIsShow] = useState(false);
  const [singleItem, SetSingleItem] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    getdata();
    // return () => {};
  }, []);
  const getdata = async () => {
    let response = await fetch("./OFF_subset17.json");
    response = await response.json();
    setData(response);
  };
  console.log("140",isShow);
  console.log("14", data);
  return (
    <>
      {isShow ? (
        <FoodDetail singleItem={singleItem} isShow={isShow} setIsShow={setIsShow} />
      ) : (
        <>
          <div className="Food-List-Header">
            <h1>Food List</h1>
          </div>
          <div className="List-Container">
            {data.map((item) => {
              return (
                <div
                  className="Item_List"
                  onClick={() => {
                    SetSingleItem(item);
                    setIsShow(true);
                  }}
                >
                  <img src={Icon} alt="Icon" />
                  <div className="Item-p-div">
                    <p className="Item-p">{item.product_name}</p>
                    <p className="Item-p">({item.generic_name})</p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
