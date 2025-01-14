import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.png";
const menuItems = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "History",
    route: "/history",
  },
  {
    title: "Products",
    route: "/products",
  },
];
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import Container from "../Container/Container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#fe313176] mt-10 py-5">
      <Container>
        <div className=" md:grid space-y-4 grid-cols-3">
          <div>
            <Image
              src={logo}
              alt="Trade Asia HRC"
              width={150}
              height={50}
            ></Image>
            <div className="flex flex-col gap-1 mt-2">
              {menuItems?.map((menu, index) => (
                <Link key={index} href={menu?.route}>
                  {menu?.title}
                </Link>
              ))}
            </div>
            <p className="text-[#fe3231]">Trade Asia Hrc &copy; {year}</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Contact Us</p>
            <div className="flex gap-2 align-top ">
              <p className="w-[30px] h-[30px] bg-foreground-50 flex justify-center items-center  rounded-full">
                <FaLocationDot></FaLocationDot>
              </p>
              <div>
                <p>Dak Bungalow Road, </p>
                <p>Nilphamari 5300.</p>
              </div>
            </div>
            <div className="flex gap-2 align-top ">
              <p className="w-[30px] h-[30px] bg-foreground-50 flex justify-center items-center  rounded-full">
                <FaPhoneAlt />
              </p>
              <div>
                <p>+880 1840- 46 48 38 </p>
              </div>
            </div>
            <div className="flex gap-2 align-top ">
              <p className="w-[30px] h-[30px] bg-foreground-50 flex justify-center items-center  rounded-full">
                <LuMail />
              </p>
              <div>
                <p>tradeasiahrc@gmai.com </p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg">About Our Company</p>
            <p className="text-xs">
              TRADE ASIA HRC (PVT.) LIMITED is one of the most rapidly growing
              company in Bangladesh. The head office of the company is located
              at Nilphamari district. The company is mainly working as an
              importer and exporter.
            </p>
            <div className="flex gap-2 mt-2">
              <Link
                href={"#"}
                className="w-[30px] h-[30px] bg-foreground-50 flex justify-center items-center  rounded-full"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={"#"}
                className="w-[30px] h-[30px] bg-foreground-50 flex justify-center items-center  rounded-full"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href={"#"}
                className="w-[30px] h-[30px] bg-foreground-50 flex justify-center items-center  rounded-full"
              >
                <FaInstagram />
              </Link>
              <Link
                href={"#"}
                className="w-[30px] h-[30px] bg-foreground-50 flex justify-center items-center  rounded-full"
              >
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
