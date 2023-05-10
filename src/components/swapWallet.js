import { Images } from "../assets/images/_Images";
import { Icons } from "../assets/icons/_icons";

export default function SwapWallet(props) {
  console.log("display", props.display === true ? "none" : "block");
  return (
    <>
      <div
        class="flex flex-col mb-6 justify-center py-[40px] mt-[-24px]"
        // style={{ display: props.display === true ? "none" : "block" }}
      >
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[32px] py-[25px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-medium">Connect a wallet</p>
              <img
                src={Images.Cancel_setting}
                className="w-[37px] h-[37px]"
              ></img>
            </div>
            <div>
              <button className="bg-[#333333] rounded-[10px] flex justify-center w-full py-[12px] text-white">
                <img
                  src={Icons.Metamask}
                  className="w-[28px] h-[26px] mr-[15px]"
                />
                <p className="font-medium text-[20px]">MetaMask Wallet </p>
              </button>
            </div>
            <div className="mt-[10px]">
              <button className="bg-[#333333] rounded-[10px] flex justify-center w-full py-[12px] text-white">
                <img src={Icons.Coin} className="w-[28px] h-[26px] mr-[15px]" />
                <p className="font-medium text-[20px]">Coinbase Wallet</p>
              </button>
            </div>
            <div className="text-[14px] text-[#333333] text-center mt-[10px]">
              By connecting a wallet, you agree to Gotradex{" "}
              <span className="text-[#00BFA6]">Terms of service</span> and
              consent to its{" "}
              <span className="text-[#00BFA6]">Privacy Policy</span>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
