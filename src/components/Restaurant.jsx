import React from 'react';
import Card from './Card';

const Restaurant = () => {
    const resto = [
        {
            img: "https://food-cms.grab.com/compressed_webp/merchants/3-CZCELYAZAAT2LN/hero/845e11b3-4fee-4559-8912-f08f7ab223c0__store_cover__2023__09__14__18__21__45.webp",
            title: "วาเลนข้าวมันไก่เจ้าเก่า (Valen Chicken Rice) - ถนนเพชรบุรี 5 (Phetchaburi 5 Rd.)",
            type: "Chicken Rice",
        },
        {
            img: "https://food-cms.grab.com/compressed_webp/merchants/THGFIST000004bl/hero/Cover_a0fb6bd711a2468c8a26509211cf78bb_1717959703732460780.webp",
            title: "McDonald's (แมคโดนัลด์) - พาต้า ปิ่นเกล้า",
            type: "Burgers,  Fried Chicken,  Fast Food",
        },
        {
            img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6LJT3J3CBBAC2/hero/54dc7816a17a4673ac5c3348b5dc75cb_1715066804297370214.webp",
            title: "ปิ้งย่าง​24ช.ม. - ศาลปกครอง ชุมแพ",
            type: "Fast Food",
        },
        {
            img: "https://food-cms.grab.com/compressed_webp/merchants/3-CYTEUGBXT2D2TJ/hero/a442e8e50a5149bf87c703e6c6020da4_1634479565555803609.webp",
            title: "Cafe Amazon (คาเฟ่ อเมซอน) - ถนนมหรรณพ",
            type: "Coffee & Tea, Small Bites/Snacks",
        },
        {
            img: "https://food-cms.grab.com/compressed_webp/merchants/3-C34ANVDYRAU3DE/hero/b81ff102-2662-4285-bc30-beb45793b9bc__store_cover__2023__01__20__01__41__57.webp",
            title: "กะเพราริมเบียง - บวรนิเวศ",
            type: "Cooked to Order",
        },
        {
            img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6NGC64VGXXWFA/hero/2aaa31ea-31b5-4915-bc60-4ce6b6f56fef__store_cover__2024__06__17__11__55__41.webp",
            title: "ตี๋หมูกะทะ - ภูเขาทอง",
            type: "Seafood",
        },
        {
            img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2VFV8L1UEJEAX/hero/3063949c-d4fb-417a-bfcb-c6738130af53__store_cover__2024__05__01__04__58__27.webp",
            title: "ครัวปักษ์ใต้รสชาติดั้งเดิมสูตรยายจวน - ข้าวสาร",
            type: "Cooked to Order",
        },
    ];

    // loop create card
    const restaurants = resto.map((restaurant) => (
        <Card
            img={restaurant.img}
            title={restaurant.title}
            type={restaurant.type}
        />
    ));

    return (
        <div className="restaurantsList flex flex-wrap gap-4 justify-center ">
            {restaurants}
        </div>
    );
}

export default Restaurant;
