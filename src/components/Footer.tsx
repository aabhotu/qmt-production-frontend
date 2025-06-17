"use client";

import Link from "next/link";
import React from "react";
// import { FaFingerprint } from "react-icons/fa";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import BackToTopButton from "./ui/ScrollToTop";
// import { getPlatformIconByName } from "@/utils";

const Footer: React.FC = () => {
  return (
<footer id="contact" className="bg-gray-100 text-gray-800 py-12">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
    
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
        <h3 className="text-2xl font-bold tracking-wide">
          {siteDetails.siteName}
        </h3>
      </Link>
      <p className="text-gray-600 text-base leading-relaxed">
        {footerDetails.subheading}
      </p>
    </div>

    {/* Cột 2: Liên hệ */}
    <div className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">Thông tin liên hệ</h4>

      {footerDetails.email && (
        <a
          href={`mailto:${footerDetails.email}`}
          className="block text-base text-gray-700 hover:text-blue-600 transition-colors"
        >
          <span className="font-semibold">Email:</span> {footerDetails.email}
        </a>
      )}
 <a
  href="https://www.facebook.com/people/Vikko-V%E1%BA%ADt-li%E1%BB%87u-chu%E1%BA%A9n-C%C3%B4ng-tr%C3%ACnh-ch%E1%BA%A5t/61576805484571/"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-base text-gray-700 hover:text-blue-600 transition-colors"
>
  <span className="font-semibold">Facebook:</span> Vikko Vật liệu chuẩn - Công trình chất
</a>
      {footerDetails.telephone && (
        <a
          href={`tel:${footerDetails.telephone}`}
          className="block text-base text-gray-700 hover:text-blue-600 transition-colors"
        >
          <span className="font-semibold">Điện thoại:</span> {footerDetails.telephone}
        </a>
      )}

      {footerDetails.address && (
        <p className="text-base text-gray-700">
          <span className="font-semibold">Địa chỉ:</span> {footerDetails.address}
        </p>
      )}
    </div>

    {/* Cột 3: Showroom & Nhà máy */}
    <div className="space-y-5">
      <h4 className="text-xl font-semibold text-gray-800">
        Địa chỉ Showroom / Nhà máy
      </h4>

      <div>
        <div className="flex items-center gap-2 text-gray-700">
          <FiMapPin className="w-5 h-5" />
          <span className="font-semibold text-base">Trụ sở Miền Bắc</span>
        </div>
        <p className="text-base mt-1 text-gray-700">{footerDetails.address}</p>
      </div>

      <div>
        <div className="flex items-center gap-2 text-gray-700">
          <FiMapPin className="w-5 h-5" />
          <span className="font-semibold text-base">Chi nhánh Miền Nam</span>
        </div>
        <p className="text-base mt-1 text-gray-700">
          Long Đức 2, Tam Phước, Biên Hoà, Đồng Nai
        </p>
      </div>
    </div>
  </div>
        <BackToTopButton />
  <div className="mt-10 text-center text-gray-500 text-base">
    <p>
      &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
    </p>
  </div>
</footer>
  );
};

export default Footer;
