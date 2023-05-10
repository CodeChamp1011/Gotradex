import { Images } from "../assets/images/_Images";
import { Icons } from "../assets/icons/_icons";

function SwapCard() {
  const height = window.innerHeight - 64;
  return (
    <>
      <div
        class={`flex flex-col mb-6 bg-[#5AE6D3] h-screen justify-center py-[40px] text-[36px]`}
      >
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[30px] py-[20px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-bold">Swap</p>
              <img src={Images.Cancel_card} className="w-[37px] h-[37px]"></img>
            </div>
            <div className="">
              <div>
                <div className="rounded-[15px] bg-[#E7FFFC] pb-[34px] pt-[20px] px-[20px]">
                  <div className="flex justify-between">
                    <div className="font-medium text-[32px]">0.00</div>
                    <button class="flex bg-[#fff] text-black dark:text-black font-bold py-[10px] px-[10px] rounded-full items-center text-[14px]">
                      <img
                        src={Icons.Ethereum}
                        className="mr-[5px] mt-[1px]"
                      ></img>
                      ETH
                      <img src={Images.Next_btn} className="ml-[26px]" />
                    </button>
                  </div>
                  <div className="flex justify-between mt-[10px]">
                    <p className="font-medium text-[14px] text-[#7A7979]">
                      $ 0.00
                    </p>
                    <div className="flex justify-between">
                      <p className="font-medium text-[14px] text-[#7A7979] mr-[3px]">
                        Balance:{" "}
                      </p>
                      <p className="font-medium text-[14px] text-[#00BFA6]">
                        1.25 ETH
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center bg-white">
                  <img
                    src={Images.Light}
                    className="w-[24px] h-[24px] absolute"
                  />
                </div>
                <div className="rounded-t-[15px] bg-[#E7FFFC] pb-[34px] pt-[20px] px-[20px] mt-[5px]">
                  <div className="flex justify-between">
                    <div className="font-medium text-[32px]">0.00</div>
                    <button class="flex bg-[#fff] text-black dark:text-black font-bold py-[10px] px-[10px] rounded-full items-center text-[12px]">
                      Select Token
                      <img src={Images.Next_btn} className="ml-[5px]" />
                    </button>
                  </div>
                  <div className="flex justify-between mt-[10px]">
                    <p className="font-medium text-[14px] text-[#7A7979]">
                      $ 0.00
                    </p>
                    <div className="flex justify-between">
                      <p className="font-medium text-[14px] text-[#7A7979] mr-[3px]">
                        Balance:{" "}
                      </p>
                      <p className="font-medium text-[14px] text-[#00BFA6]">
                        1 MATIC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-b-[15px] bg-[#E7FFFC] py-[12px] px-[15px] mt-[2px] mb-[30px]">
                <div className="flex justify-between mt-[10px] items-center">
                  <div className="flex justify-start items-center h-[12px] w-full">
                    <img src={Images.Feel} />
                    <p className="text-[12px] font-medium ml-[8px]">
                      1 MATIC = 0.00001 ETH ($0.0000125)
                    </p>
                  </div>
                  <img src={Images.Down} />
                </div>
              </div>
              <button class="bg-[#333333] text-linear-gradient(97.06deg, #76DDD0 -1.93%, #00FFDE 25.45%, #29A7ED 48.31%, #4ED6DF 81.63%, #76DDD0 102.53%); text-[20px] py-[15px] px-5 rounded-[10px] w-full">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SwapCard;
