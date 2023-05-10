import { Images } from "../assets/images/_Images";

export default function Settings() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[32px] py-[25px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-medium">Settings</p>
              <img
                src={Images.Cancel_setting}
                className="w-[37px] h-[37px]"
              ></img>
            </div>
            <div className="flex justify-start items-center w-full">
              <img src={Images.Feel} />
              <p className="text-[16px] text-[#606060] font-medium ml-[8px]">
                Slippage Tolerance
              </p>
            </div>
            <div className="justify-start items-center w-full grid grid-cols-6 gap-[10px] mt-[10px]">
              <div className="bg-[#333333] border-[#000000] border-[1px] rounded-[10px] text-white flex justify-center px-[12px] py-[10px]">
                0.1%
              </div>
              <div className="bg-[#333333] border-[#000000] border-[1px] rounded-[10px] text-white flex justify-center px-[12px] py-[10px]">
                0.2%
              </div>
              <div className="bg-[#333333] border-[#000000] border-[1px] rounded-[10px] text-white flex justify-center px-[12px] py-[10px]">
                1%
              </div>
              <div className="col-span-3 bg-[#E7FFFC] border-[#BAF1EA] border-[1px] rounded-[10px] flex justify-end px-[12px] py-[10px]">
                10.0%
              </div>
            </div>
            <div className="flex justify-start items-center mt-[20px] w-full">
              <img src={Images.Feel} />
              <p className="text-[16px] text-[#606060] font-medium ml-[8px]">
                Slippage Tolerance
              </p>
            </div>
            <div className="justify-start items-center w-full grid grid-cols-6 gap-[10px] mt-[10px]">
              <div className="bg-[#333333] border-[#000000] border-[1px] rounded-[10px] text-white flex justify-center px-[12px] py-[10px]">
                30.00
              </div>
              <div className="col-span-5 rounded-[10px] flex justify-start px-[12px] py-[10px] text-[13px]">
                Minutes/seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
