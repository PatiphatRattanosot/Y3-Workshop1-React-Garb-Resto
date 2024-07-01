import React from "react";
import { useState,  useEffect } from "react";
function AddRestaurant() {
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
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });

  const handelChange = (e) => {
    const {name, value} = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handelSubmit = async () => {
    try {
      //
      const response = await fetch("http://localhost:3000/resto", {
        method: "POST",
        body: JSON.stringify(restaurant),
      });
      //ถ้าเป็นจริง จะแจ้งเตือนว่าสำเร็จ
      if(response.ok){
        alert("Successfully")
        setRestaurant({
          title: "",
          type: "",
          img: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="container flex flex-col items-center mx-auto space-y-6 ">
        <div className="">
          <h1 className="text-2xl text-center">Add Restaurant</h1>
          
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="title"
                id="add-title"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handelChange}
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="type"
                id="add-type"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handelChange}
                required
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Type
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="img"
                id="add-img"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handelChange}
                required
              />
              <label
                for="floating_repeat_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Img
              </label>
              {restaurant.img && (
                <div className="flex item-center gap-2">
                  <img src={restaurant.img} alt="" />
                </div>
              )}
            </div>

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handelSubmit}
            >
              Submit
            </button>
          
        </div>
      </div>
    </div>
  );
}

export default AddRestaurant;
