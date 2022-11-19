import Image from "next/image";

const CustomerItem = ({ imgSrc }) => {
  return (
    <div className="mt-5 mx-4">
      <div className="p-6 bg-secondary text-white rounded-[5px]">
        <p>
        homas Ridgeway Gould, 7 tane Batı Rüzgarı heykeli yapar ve bu sonuncusudur. Antik Yunan heykellerinin estetiği ile yapılmış bu çalışmasında, figürün kemerinde 32 yıldız bulunur. 1876 tarihinde Philadelphia’daki Centennial sergisi için hazırladığı bu zarif heykeldeki yıldızlar muhtemeldir ki ABD’yi temsil ediyor.⁣⁣
        </p>
        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold">Thomas Ridgeway Gould</span>
          <span className="text-[15px]">ABD Heykeltraş</span>
        </div>
      </div>

      <div
        className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-[''] before:absolute before:top-0 
      flex justify-center before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5 "
      >
        <Image
          src={imgSrc}
          alt=""
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;