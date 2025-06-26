"use client";

import Link from "next/link";
import React from "react";
// import { FaFingerprint } from "react-icons/fa";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import BackToTopButton from "./ui/ScrollToTop";
import FloatingButtons from "./ui/FloatingButtons";
// import { getPlatformIconByName } from "@/utils";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#002603] text-gray-800 py-6">
      <div className="max-w-[1500px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-4">

        {/* Cột 1: Thông tin thương hiệu */}
        <div className="space-y-4">
          <Link href="#contact" className="flex items-center gap-2">
            <Image
              src="/images/logo.ico"
              alt="icon"
              width={28}
              height={28}
              quality={100}
            />
            <h3 className="text-2xl font-bold tracking-wide text-white">
              {siteDetails.siteName}
            </h3>
          </Link>
          <p className="text-[#618062] text-base leading-relaxed">
            Thương hiệu sơn nước uy tín, mang đến giải pháp sơn và chống thấm bền đẹp, chất lượng cao cho mọi công trình.
          </p>
        </div>

        {/* Cột 2: Liên hệ */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Thông tin liên hệ</h4>

          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="block text-base text-[#618062] hover:text-[#84D187] transition-colors"
            >
              <span className="font-semibold">Email:</span> {footerDetails.email}
            </a>
          )}
          <a
            href="https://www.facebook.com/people/Vikko-V%E1%BA%ADt-li%E1%BB%87u-chu%E1%BA%A9n-C%C3%B4ng-tr%C3%ACnh-ch%E1%BA%A5t/61576805484571/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base text-[#618062] hover:text-[#84D187] transition-colors"
          >
            <span className="font-semibold">Facebook:</span> Vikko Vật liệu chuẩn - Công trình chất
          </a>
          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="block text-base text-[#618062] hover:text-[#84D187] transition-colors"
            >
              <span className="font-semibold">Điện thoại:</span> {footerDetails.telephone}
            </a>
          )}

          {/* {footerDetails.address && (
            <p className="text-base text-[#618062]">
              <span className="font-semibold">Địa chỉ:</span> {footerDetails.address}
            </p>
          )} */}
        </div>

        {/* Cột 3: Showroom & Nhà máy */}
        <div className="space-y-5">
          <h4 className="text-xl font-semibold text-white">
            Địa chỉ Showroom / Nhà máy
          </h4>

          <div>
            <div className="flex items-center gap-2 text-white">
              <FiMapPin className="w-5 h-5" />
              <span className="font-semibold text-base">Trụ sở Miền Bắc</span>
            </div>
            <p className="text-base mt-1 text-[#618062]">{footerDetails.address}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-white">
              <FiMapPin className="w-5 h-5" />
              <span className="font-semibold text-base">Chi nhánh Miền Nam</span>
            </div>
            <p className="text-base mt-1 text-[#618062]">
              Long Đức 2, Tam Phước, Biên Hoà, Đồng Nai
            </p>
          </div>
        </div>
      </div>
      <FloatingButtons />
      <div className="fixed bottom-4 right-4 z-40">
      <BackToTopButton />
</div>

      <hr className="max-w-[1500px] mx-auto px-4 border-t border-[#1D421B]"/>
      <div className=" flex md:flex-row max-w-[1500px] mx-auto mt-6 text-center text-[#618062] text-base justify-between items-center">
        <div className="hidden md:flex space-x-1 md">
          <Image 
            src="/images/Social Media.svg"
            width={40}
            height={40}
            key={"0"}
            quality={100}
            priority={true}
            unoptimized={true}
            alt="img"
            className=""
          />
          <Image 
            src="/images/Social Media (1).svg"
            width={40}
            height={40}
            key={"0"}
            quality={100}
            priority={true}
            unoptimized={true}
            alt="img"
            className=""
          />
          <Image 
            src="/images/Pinterest.svg"
            width={40}
            height={40}
            key={"0"}
            quality={100}
            priority={true}
            unoptimized={true}
            alt="img"
            className=""
          />
          <Image 
            src="/images/Ins.svg"
            width={40}
            height={40}
            key={"0"}
            quality={100}
            priority={true}
            unoptimized={true}
            alt="img"
            className=""
          />
        </div>
        <div className="mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
        </p>
        </div>
        <div className="hidden md:flex space-x-1">
          <Image 
            src="/images/ApplePay.svg"
            width={0}
            height={0}
            style={{ height: 'auto', width: 'auto' }}
            key={"0"}
            quality={100}
            priority={true}
            unoptimized={true}
            alt="img"
            className=""
          />
          <Image 
            src="/images/Visa.svg"
            width={0}
            height={0}
            style={{ height: 'auto', width: 'auto' }}
            key={"0"}
            quality={100}
            priority={true}
            unoptimized={true}
            alt="img"
            className=""
          />
          <Image 
            src="/images/Discover.svg"
            width={0}
            height={0}
            style={{ height: 'auto', width: 'auto' }}
            key={"0"}
            quality={100}
            priority={true}
            unoptimized={true}
            alt="img"
            className=""
          />
          <Image 
            src="/images/Mastercard.svg"
            width={0}
            height={0}
            style={{ height: 'auto', width: 'auto' }}
            key={"0"}
            quality={100}
            priority={true}
            unoptimized={true}
            alt="img"
            className=""
          />
          <Image 
            src="/images/Cart.svg"
            width={0}
            height={0}
            style={{ height: 'auto', width: 'auto' }}
            key={"0"}
            quality={100}
            priority={true}
            unoptimized={true}
            alt="img"
            className=""
          />
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
