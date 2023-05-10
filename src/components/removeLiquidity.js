import { Images } from "../assets/images/_Images";
import { Icons } from "../assets/icons/_icons";

export default function RemoveLiquidity() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] text-[36px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[30px] py-[20px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-normal">Remove liquidity</p>
              <img src={Icons.Catalogy} className="w-[37px] h-[37px]"></img>
            </div>
            <div className="">
              <div>
                <div className="rounded-[15px] mb-[5px] bg-[#E7FFFC] p-[20px]">
                  <p className="text-[16px] mb-[10px]">Amount</p>
                  <p className="text-[14px]">0%</p>
                </div>
                <div className="flex justify-between rounded-[15px] bg-[#E7FFFC] p-[20px]">
                  <div className="flex justify-center flex-col">
                    <p className="text-[16px] mb-[10px]">Input</p>
                    <p className="text-[14px]">0%</p>
                  </div>
                  <button class=" bg-[#fff] text-black font-bold py-[10px] rounded-[16px] items-center text-[14px]">
                    <p className="text-[12px] ml-[25px]">
                      Balance: <span className="text-[#00BFA6]">1.25 ETH</span>
                    </p>
                    <div class="pl-[20px] pr-[27px] pt-[10px] pb-[17px] font-medium flex">
                      <div className="flex items-center">
                        <img
                          src={Icons.Ethereum}
                          className="w-[22px] h-[22px] absolute z-10"
                        />
                        <img
                          src={Icons.MATIC}
                          className="w-[178x] h-[18px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px] text-[14px]">
                        <p>ETH / MATIC</p>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="flex justify-center items-center bg-white pt-[10px] pb-[20px]">
                  <img src={Images.Down} className="w-[20px] h-[20px]" />
                </div>
                <div className="rounded-[15px] bg-[#E7FFFC] py-[30px] px-[20px] mb-[5px]">
                  <div className="flex justify-between">
                    <div className="font-medium text-[16px] items-center flex">
                      Output
                    </div>
                    <button class="px-[30px] flex bg-[#fff] text-black font-bold py-[10px] rounded-full items-center text-[14px]">
                      <img
                        src={Icons.Ethereum}
                        className="mr-[5px] mt-[1px]"
                      ></img>
                      ETH
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center bg-white">
                  <img src={Icons.Add} className="w-[36px] h-[36px] absolute" />
                </div>
                <div className="rounded-[15px] bg-[#E7FFFC] py-[30px] px-[20px]">
                  <div className="flex justify-between">
                    <div className="font-medium text-[16px] items-center flex">
                      Output
                    </div>
                    <button class="px-[25px] flex bg-[#fff] text-black font-bold py-[10px] rounded-full items-center text-[14px]">
                      <img
                        src={Icons.MATIC}
                        className="mr-[5px] mt-[1px] w-[15px] h-[15px]"
                      ></img>
                      MATIC
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-[20px] px-[20px]">
                <p className="text-[16px] font-medium">Price</p>
                <div className="flex">
                  <img
                    src={Images.Up}
                    className="w-[20px] h-[20px] mr-[50px]"
                  />
                  <div className="text-[14px] font-medium">
                    <p className="flex justify-end">1ETH = 40 MATIC</p>
                    <p>1MATIC = 0.251 ETH</p>
                  </div>
                </div>
              </div>
              <button class="bg-[#333333] mt-[20px] mb-[20px] text-linear-gradient(97.06deg, #76DDD0 -1.93%, #00FFDE 25.45%, #29A7ED 48.31%, #4ED6DF 81.63%, #76DDD0 102.53%); text-[20px] py-[15px] px-5 rounded-[25px] w-full">
                Remove liquidity
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
