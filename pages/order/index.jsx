import Image from "next/image";

const Order = () => {
  return (
    <div className="overflow-x-auto">
      <div className="min-h-[calc(100vh_-_433px)] flex  justify-center items-center flex-col p-10  min-w-[1000px]">
        <div className=" flex items-center flex-1  w-full max-h-28">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Sipariş ID
                </th>
                <th scope="col" className="py-3 px-6">
                  Müşteri
                </th>
                <th scope="col" className="py-3 px-6">
                  Adress
                </th>
                <th scope="col" className="py-3 px-6">
                  Toplam
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  63107f5559...
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Abdullah Akpınar
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Gaziantep
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $50
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between w-full p-10 bg-primary mt-6">
          <div className="relative flex flex-col">
            <Image
              src="/Images/indir.jpeg"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Hazırlanıyor</span>
          </div>
          <div className="relative flex flex-col animate-pulse">
            <Image
              src="/Images/bike.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Yolda</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/Images/delivered.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Teslim edilmiş</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/Images/paid.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Ödeme</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
