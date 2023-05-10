import { Icons } from "../assets/icons/_icons";

export default function Propation() {
  return (
    <>
      <div class="flex flex-col mb-6 bg-[#fff] flex justify-center py-[40px] lg:px-[450px] px-[10px] text-[36px]">
        <div className="lg:flex flex-row lg:justify-between justify-center">
          <div>
            <button className="flex justify-center items-center bg-[#333333] rounded-[10px] text-white p-[10px] min-w-[145px]">
              <img src={Icons.Coin}></img>
              <p className="ml-[5px] text-[16px] font-[600]">Select Coin</p>
            </button>
          </div>
          <div className="flex">
            <button className="flex justify-center items-center bg-[#333333] rounded-[10px] text-white p-[10px] min-w-[145px]">
              <img src={Icons.Clock}></img>
              <p className="ml-[5px] text-[16px] font-[600]">04 : 39 mins</p>
            </button>
            <button className="flex justify-center flex- items-center bg-[#333333] ml-[10px] rounded-[10px] text-white p-[10px] min-w-[145px]">
              <p className="mr-[5px] text-[16px] font-[600]">History</p>
              <img src={Icons.History}></img>
            </button>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 flex justify-center mt-[30px]">
          <div className="bg-[#fff] rounded-[15px] shadow-md rounded-md w-full h-[370px] min-w-[300px] p-[10px]">
            <div className="flex justify-between">
              <div className="flex">
                <img src={Icons.Previous}></img>
                <p className="ml-[5px] text-[16px] font-[600]">Predict</p>
              </div>
              <div>
                <p className="text-black text-[16px]">#14958</p>
              </div>
            </div>
            <div className="col-span-5 row-span-3 my-[20px]">
              <table class="table-auto w-full border border-gray-300 border-0 rounded-[10px]">
                <tbody className="flex flex-col bg-[#FF7676] rounded-[15px] my-[10px] mx-[0px]">
                  <tr className="flex justify-between p-[10px]">
                    <td className="flex justify-center items-center text-[14px]">
                      Locked Prize:
                    </td>
                    <td className="flex justify-center items-center text-[14px]">
                      $40 000
                    </td>
                  </tr>
                  <tr className="flex justify-between p-[10px]">
                    <td className="flex justify-center items-center text-[14px]">
                      Locked Prize:
                    </td>
                    <td className="flex justify-center items-center text-[14px]">
                      $40 000
                    </td>
                  </tr>
                  <tr className="flex justify-between p-[10px]">
                    <td className="flex justify-center items-center text-[14px]">
                      Winning Position:
                    </td>
                    <td className="flex justify-center items-center text-[14px]">
                      Bear
                    </td>
                  </tr>
                  <tr className="flex justify-between p-[10px]">
                    <td className="flex justify-center items-center text-[14px]">
                      Prize Pool:
                    </td>
                    <td className="flex justify-center items-center text-[14px]">
                      $80 000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center">
              <button class="rounded-full bg-cyan-500 hover:bg-cyan-600">
                <p className="text-[16px] p-[10px] flex justify-center items-center tracking-[.05em]">
                  Claim Reward
                </p>
              </button>
            </div>
          </div>
          <div className="bg-[#fff] rounded-[15px] shadow-md rounded-md w-full h-[370px] min-w-[300px] p-[10px]">
            <div className="flex justify-between">
              <div className="flex">
                <img src={Icons.Next1}></img>
                <p className="ml-[5px] text-[16px] font-[600]">Predict</p>
              </div>
              <div>
                <p className="text-black text-[16px]">#14958</p>
              </div>
            </div>
            <div className="flex flex-col bg-[#E7FFFC] px-[10px] mt-[30px] rounded-[15px]">
              <button class="flex justify-center items-center rounded-[10px] bg-[#5AE6D3]">
                <img src={Icons.Cow}></img>
                <p className="text-[16px] p-[10px] flex justify-center items-center">
                  Bet Bull
                </p>
              </button>
              <button class="flex justify-center items-center rounded-[10px] bg-[#FF7676] mt-[15px]">
                <img src={Icons.Bear}></img>
                <p className="text-[16px] p-[10px] flex justify-center items-center">
                  Bet Bear
                </p>
              </button>
            </div>
          </div>
          <div className="bg-[#fff] rounded-[15px] shadow-md rounded-md w-full h-[370px] min-w-[300px] p-[10px]">
            <div className="flex justify-between">
              <div className="flex">
                <img src={Icons.Next}></img>
                <p className="ml-[5px] text-[16px] font-[600]">Next</p>
              </div>
              <div>
                <p className="text-black text-[16px]">#14958</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-[20%]">
              <p className="text-[16px] font-[400] text-black">Bet Begins</p>
              <p className="text-[36px] font-[600] text-black">10:00 mins</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
