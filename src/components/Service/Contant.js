import React from "react";

function Contant() {
  return (
    <div className="bg-Co2 font-Cai">
      <form className="flex flex-col justify-center items-center  2xl:w-2/5 md:w-10/12 p-8 mx-auto py-24 ">
        <p className="text-center text-white md:text-5xl text-3xl  mb-32">
          تواصل معنا
        </p>

        <div>
          <label className="float-right text-4xl text-white">اسمك</label>

          <div>
            <input
              type="text"
              placeholder="ادخل الإسم"
              className=" hover:border-Co1 my-5 focus:border-Co1 border-2 duration-150 text-4xl p-5 sm:px-16 px-3  text-right  outline-none mb-16"
            />
          </div>
        </div>

        <div>
          <label className="float-right text-4xl text-white">إيميل</label>

          <div>
            <input
              type="email"
              placeholder="ادخل الإيميل"
              className=" hover:border-Co1 my-5 focus:border-Co1 border-2 duration-150 text-4xl p-5 sm:px-16 px-3  text-right  outline-none mb-16"
            />
          </div>
        </div>

        <div>
          <label className="float-right text-4xl text-white">رقم الجوال</label>

          <div>
            <input
              type="text"
              placeholder="ادخل الرقم"
              className=" hover:border-Co1 my-5 focus:border-Co1 border-2 duration-150 text-4xl p-5 sm:px-16 px-3  text-right  outline-none mb-16"
            />
          </div>
        </div>

        <div>
          <label className="float-right text-4xl text-white pb-5">رسالتك</label>

          <div>
            <textarea
              type="text"
              placeholder="اكتب رسالتك هنا"
              className="block hover:border-Co1  focus:border-Co1 border-2 text-2xl sm:w-sll w-xsll sm:px-5 pt-5 pb-52 text-right outline-none "
            />
          </div>
        </div>

        <div>
          <input
            type={"submit"}
            className="bg-Co1 text-white p-5 px-14 text-3xl mt-24 cursor-pointer hover:bg-slate-700 duration-150"
          />
        </div>
      </form>
    </div>
  );
}

export default Contant;
