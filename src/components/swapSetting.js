import { Images } from "../assets/images/_Images";
import { Icons } from "../assets/icons/_icons";
import { CheckButton1, CheckButton } from "../components/checkButton";

export default function SwapSetting() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[30px] py-[20px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-medium">Select a token</p>
              <img
                src={Images.Cancel_setting}
                className="w-[37px] h-[37px]"
              ></img>
            </div>
            <div>
              <form>
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search name or paste address"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-[17px]">
              <CheckButton title="ETH" url={Icons.WETH} />
              <CheckButton title="DAI" url={Icons.DAI} />
              <CheckButton title="USDC" url={Icons.USDC} />
              <CheckButton title="USDT" url={Icons.USDT} />
              <CheckButton title="WBTC" url={Icons.WBTC} />
              <CheckButton title="WETD" url={Icons.WETD} />
            </div>
            <div className="mt-[20px] h-[330px] overflow-auto">
              <CheckButton1 title="ETH" standfor="Ether" url={Icons.Ethereum} />
              <CheckButton1
                title="WETH"
                standfor="Wrapped Ether"
                url={Icons.WETH}
              />
              <CheckButton1 title="MATIC" standfor="Matic" url={Icons.MATIC} />
              <CheckButton1 title="1INCH" standfor="1inch" url={Icons.INCH} />
              <CheckButton1 title="SHIBA" standfor="Shiba" url={Icons.SHIBA} />
              <CheckButton1 title="BNB" standfor="Binance" url={Icons.BNB} />
              <CheckButton1 title="AAVE" standfor="Aave" url={Icons.AAVE} />
              <CheckButton1 title="ABT" standfor="Arcblock" url={Icons.ABT} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
