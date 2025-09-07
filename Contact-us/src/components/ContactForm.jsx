import React from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <section className=" flex max-w-[1000px] m-auto mt-10 ">
      <div className=" flex flex-col gap-6 ">
        <div className="flex gap-8 ">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage className=" text-2xl" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt className=" text-2xl" />} />
        </div>
        <Button
          variant="white"
          text="VIA EMAIL FORM"
          icon={<HiMail className=" text-2xl" />}
        />

        <form className=" flex flex-col gap-6" action="">
          <div className=" flex flex-col w-full relative ">
            <label
              className=" absolute top-[-12px] left-2.5 bg-white px-2.5 text-[14px]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="h-11 px-2 py-4 border border-solid border-black rounded-[5px] "
              type="text"
              name="name"
            />
          </div>
          <div className=" flex flex-col w-full relative ">
            <label
              className=" absolute top-[-12px] left-2.5 bg-white px-2.5 text-[14px]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="h-11 px-2 py-4 border border-solid border-black rounded-[5px] "
              type="email"
              name="email"
            />
          </div>
          <div className=" flex flex-col w-full relative ">
            <label
              className=" absolute top-[-12px] left-2.5 bg-white px-2.5 text-[14px]"
              htmlFor="text"
            >
              Text
            </label>
            <textarea
              className="px-2 py-4 border border-solid border-black rounded-[5px] "
              name="text"
              rows={6}
            />
          </div>
          <div className="flex justify-end">
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
