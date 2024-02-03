import React from "react";

const Navbar = () => {
  return (
    <header className="py-3 bg-[url(https://react-shop-siza.vercel.app/assets/AbstractDesign-5_Gpi5_9.svg)] bg-no-repeat bg-cover">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-3xl font-bold">React shop</h3>
        <div>
          <button className="btn">
            cart
            <div className="badge">0</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
