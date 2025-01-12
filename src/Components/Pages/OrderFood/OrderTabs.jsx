import React, { useState } from "react";
import FoodCard from "../../FoodCard/FoodCard";

const OrderTabs = ({ items }) => {
  // const [itemPerPage, setItemPerPage] = useState(6);
  // const [currentPage, setCurrentPage] = useState(0);
  // const count = items.length;
  // const numberOfPages = Math.ceil(count / itemPerPage);
  // const pages = []
  // for(let i=0; i< numberOfPages; i++){

  // }
  // const pages = [...Array(numberOfPages).keys()];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
      {/* <div className="pagination">
        {pages.map((page) => (
          <button className={currentPage === page && 'selected' } onClick={() => setCurrentPage(page)} key={page}>{page}</button>
        ))}
        
      </div> */}
    </div>
  );
};

export default OrderTabs;
