import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";

const Index = () => {
  return (
    <div className="flex items-center h-screen gap-20 py-20 flex-wrap ">
      <div className="relative md:flex-1 w-[80%] h-[80%] mx-20">
        <Image src="/Images/visne.jpg" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Vişne Mermeri</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
          $50
        </span>
        <p className="text-sm my-4 md:pr-24">
          Vişne Mermeri Vişne Mermeri Vişne Mermeri Vişne Mermeri Vişne Mermeri Vişne Mermeri
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
          <div className="relative w-16 h-16">
              <Image src="/Images/visne.jpg" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                DÜZ
              </span>
            </div>
            <div className="relative w-16 h-16">
              <Image src="/Images/visne.jpg" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                OVAL
              </span>
            </div>
            <div className="relative w-16 h-16 ">
                <div className="rounded-md">
                <Image src="/Images/visne.jpg" alt="" layout="fill" />
                </div>
              
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                DOĞAL
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 my-6 md:justify-start justify-center">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">50 FİDAN</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">75 FİDAN</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">100 FİDAN</span>
          </label>
        </div>
        <button className="btn-primary">Sepete ekle</button>
      </div>
    </div>
  );
};

export default Index;