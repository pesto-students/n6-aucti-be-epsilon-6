import React from "react";
import FilterCheckBox from "../../Shared/filterCheckbox";
import ProductDetail from "../../Shared/ProductDetails";

const ProductPage = () => {
  return (
    <>
      <div class="col-start-1 row-start-2 col-span-1 row-span-4 ">
        <h1></h1>
      </div>
      <div class="col-start-1 row-start-1 col-span-5 row-span-4 flex justify-center">
        <ProductDetail
          title="ParagonRomario's Flamengo Worn and Signed Shirt, 1995"
          base_price={15750}
          highest_bid={27000}
          start_time={"19/08/2021 07:00 pm"}
          end_time={"29/08/2021 10:15 am"}
          bids_registered={7}
          product_description="The shorts are such a great color and in really good condition. They were stiff upon arrival but softened up after the initial wash. Wish I had taken better measurements as they are much bigger in all areas except for the waist :( but that's on me. Shipping was speedy and item was packaged well."
        />
      </div>
    </>
  );
};

export default ProductPage;
