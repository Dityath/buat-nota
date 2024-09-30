// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Rec1 from "./pages/receipts/rec1";

const Router = () => {
  return (
    <div className='flex justify-center items-center m-5'>
      <section className='w-full max-w-5xl'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/receipt1' element={<Rec1 />} />
        </Routes>
      </section>
    </div>
  );
};

export default Router;
