import { Images } from "../assets/images/_Images";

export default function Liquidity() {
  return (
    <>
      <div class="flex flex-col mb-6 h-screen bg-[#5AE6D3] justify-center py-[40px] text-[36px]">
        <div className="flex justify-center">
          <div className="rounded-[25px] bg-[#fff] w-[730px] px-[30px] py-[40px] flex flex-col items-center">
            <img src={Images.Money} className="w-[65px] h-[57px] mb-[20px]" />
            <p className="text-[14px] text-[#999999] mb-[10px]">
              Connect your wallet to view your liquidity positions.
            </p>
            <button class="bg-[#333333] text-linear-gradient(97.06deg, #76DDD0 -1.93%, #00FFDE 25.45%, #29A7ED 48.31%, #4ED6DF 81.63%, #76DDD0 102.53%); text-[20px] py-[10px] px-[143px] rounded-[25px]">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
