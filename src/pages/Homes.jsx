import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Restaurant from "../components/Restaurant";
import { useEffect, useState } from "react";

function Homes() {
  const [resto, setResto] = useState([]);
  const [filterresto, setFilterResto] = useState([]);
  useEffect(() => {
    //ดาวโหลดข้อมูล
    fetch("http://localhost:3000/resto")
      //then = รอ
      .then((res) => {
        //แปลงtextเป็นjson และretrun
        return res.json();
      })
      .then((response) => {
        // อัพเดต setResto
        setResto(response);
        setFilterResto(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="container flex flex-col items-center mx-auto space-y-6 ">
        <Header />
        <Search resto={resto} setFilterResto={setFilterResto} />
        <Restaurant resto={filterresto} />
      </div>
    </>
  );
}

export default Homes;
