import { Images } from "../assets/images/_Images";
import { Icons } from "../assets/icons/_icons";

export default function LiquidityTable() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="lg:w-[1200px] justify-center">
            <div className="flex justify-between items- mb-[20px]">
              <p className="ml-[20px] text-[20px]">My liquidity</p>
              <div className="flex justify-around items-center">
                <button class="bg-[#333333]  h-[40px] font-bold py-1 px-5 rounded-[25px] mr-[20px] ">
                  <p className="flex items-center justify-center w-[125px] h-[16px] text-[16px] text-white">
                    Add Liquidity
                  </p>
                </button>
                <button>
                  <img src={Icons.Catalogy} />
                </button>
              </div>
            </div>

            <div class="relative overflow-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left">
                <thead class="text-xs text-white uppercase bg-[#333333] h-[50px]">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Pairs/pools
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Token one
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Token two
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Your pool Token
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Your Pool Share
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#f7f7f7]">
                  <tr class=" py-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.Ethereum}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.MATIC}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>ETH/MATIC</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">28 eTH</td>
                    <td class="px-6 py-4">4000 MATIC</td>
                    <td class="px-6 py-4">500,000</td>
                    <td class="px-6 py-4">60%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.Ethereum}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.WBTC}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>ETH/BTC</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">48 eTH</td>
                    <td class="px-6 py-4">300 BTC</td>
                    <td class="px-6 py-4">100,000</td>
                    <td class="px-6 py-4">50%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.USDC}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.Ethereum}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>USDC/ETH</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">500 USDC</td>
                    <td class="px-6 py-4">50 ETH</td>
                    <td class="px-6 py-4">300,000</td>
                    <td class="px-6 py-4">40%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.USDT}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.Ethereum}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>USDT/ETH</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">1000 USDT</td>
                    <td class="px-6 py-4">80 ETH</td>
                    <td class="px-6 py-4">600,000</td>
                    <td class="px-6 py-4">30%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.DAI}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.AAVE}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>DAI/AAVE</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">258 DAI</td>
                    <td class="px-6 py-4">25 AAVE</td>
                    <td class="px-6 py-4">150,000</td>
                    <td class="px-6 py-4">20%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.SHIBA}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.WBTC}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>SHIBA/BTC</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">578 SHIBA</td>
                    <td class="px-6 py-4">500 BTC</td>
                    <td class="px-6 py-4">200,000</td>
                    <td class="px-6 py-4">10%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.WBTC}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.BNB}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>BTC/BNB</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">32 BTC</td>
                    <td class="px-6 py-4">900 BNB</td>
                    <td class="px-6 py-4">900,000</td>
                    <td class="px-6 py-4">70%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.WETH}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.WBTC}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>wETH/BTC</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">56 WETH</td>
                    <td class="px-6 py-4">400 BTC</td>
                    <td class="px-6 py-4">250,000</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.WETH}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.SHIBA}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>wETH/SHIBA</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">89 wETH</td>
                    <td class="px-6 py-4">450 SHIBA</td>
                    <td class="px-6 py-4">400,000</td>
                    <td class="px-6 py-4">55%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
