import React, { useEffect, useState } from "react";

export const List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getdata();
    // return () => {};
  }, []);
  const getdata = async () => {
    let response = await fetch("./OFF_subset17.json");
    response =await response.json();
    setData(response)
};
console.log("14", data);
  return <div>List</div>;
};
