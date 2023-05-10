import { Images } from "../assets/images/_Images";
import { Icons } from "../assets/icons/_icons";

export default function LiquidityTransaction() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] text-[36px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[30px] py-[20px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-bold">Recent Transactions</p>
              <img
                src={Images.Cancel_setting}
                className="w-[37px] h-[37px]"
              ></img>
            </div>
            <div>
              <div className="flex justify-between my-[15px]">
                <div className="flex justify-around text-[14px] font-medium">
                  <p className="mr-[20px]">Swap 510 USDT for 1000 NEX</p>
                  <img src={Icons.Link} />
                </div>
                <div>
                  <img src={Icons.Ok} className="w-[20px] h-[20px] mr-[20px]" />
                </div>
              </div>
              <div className="flex justify-between my-[15px]">
                <div className="flex justify-around text-[14px] font-medium">
                  <p className="mr-[20px]">Remove 21700 USDT and 43400 NEX</p>
                  <img src={Icons.Link} />
                </div>
                <div>
                  <img src={Icons.Ok} className="w-[20px] h-[20px] mr-[20px]" />
                </div>
              </div>
              <div className="flex justify-between my-[15px]">
                <div className="flex justify-around text-[14px] font-medium">
                  <p className="mr-[20px]">Add 100000 NEX and 50000 USDT</p>
                  <img src={Icons.Link} />
                </div>
                <div>
                  <img src={Icons.Ok} className="w-[20px] h-[20px] mr-[20px]" />
                </div>
              </div>
              <div className="flex justify-between my-[15px]">
                <div className="flex justify-around text-[14px] font-medium">
                  <p className="mr-[20px]">Approve NEX</p>
                  <img src={Icons.Link} />
                </div>
                <div>
                  <img src={Icons.Ok} className="w-[20px] h-[20px] mr-[20px]" />
                </div>
              </div>
              <div className="flex justify-between my-[15px]">
                <div className="flex justify-around text-[14px] font-medium">
                  <p className="mr-[20px]">Approve USDT</p>
                  <img src={Icons.Link} />
                </div>
                <div>
                  <img src={Icons.Ok} className="w-[20px] h-[20px] mr-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
