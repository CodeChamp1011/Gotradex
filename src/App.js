import Header from "./pages/layouts/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Images } from "./assets/images/_Images";
import { Icons } from "./assets/icons/_icons";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SwapCard from "./components/swapCard";
import Liquidity from "./components/liquidity";
import SwapSetting from "./components/swapSetting";
import AddLiquidity from "./components/addLiquidity";
import Settings from "./components/settings";
import SwapWallet from "./components/swapWallet";
import LiquidityTable from "./components/liquidTable";
import RemoveLiquidity from "./components/removeLiquidity";
import LiquidityTransaction from "./components/liquidityTransaction";
import Propation from "./components/propation";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SectionOne />
                <SectionTwo />
                <Propation />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
              </>
            }
          />
          <Route path="/swap" element={<SwapCard />} />
          <Route path="/liquidity" element={<Liquidity />} />
          <Route
            path="/propation"
            element={
              <>
                <Propation />
                <SectionThree />
              </>
            }
          />
          <Route
            path="/equalbet"
            element={
              <>
                <Propation />
                <SectionThree />
              </>
            }
          />
          <Route
            path="/4d"
            element={
              <>
                <SectionOne />
                <SectionTwo />
                <Propation />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
              </>
            }
          />
          <Route
            path="/6d"
            element={
              <>
                <SectionOne />
                <SectionTwo />
                <Propation />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
              </>
            }
          />
          <Route
            path="/jackpot"
            element={
              <>
                <SectionOne />
                <SectionTwo />
                <Propation />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function SectionOne() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleModal = () => {
    console.log("qweqwe");
  };

  return (
    <>
      <Box className="flex justify-center !p-0">
        <Tabs
          value={value}
          textColor="black"
          TabIndicatorProps={{
            style: {
              backgroundColor: "black",
            },
          }}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="4D Lottery" {...a11yProps(0)} />
          <Tab label="6D Lottery" {...a11yProps(1)} />
          <Tab label="Jackpot" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] flex justify-center py-[40px] lg:px-[450px] px-0 text-[36px]">
          <div
            class="flex justify-center hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home"
            role="tabpanel"
            style={{ display: "flex" }}
            aria-labelledby="tabs-home-tab"
            data-te-tab-active
          >
            <p>Finished Rounds</p>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-[15px] bg-[#fff] w-full h-[450px] flex flex-col justify-center items-center">
              <div className="mb-[80px]">
                <div className="absolute left-0 top-[20px] ml-[10px]">
                  <p className="text-black text-[32px] flex items-center justify-left">
                    Round #15
                  </p>
                  <p className="text-black text-[14px] flex items-center justify-center">
                    End time: Mar 3, 2023, 12:00 PM
                  </p>
                </div>
                <div className="absolute right-0 top-[20px]">
                  <div className="flex justify-center w-[172px] h-[41px] bg-[#333333] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    <img
                      src={Icons.Icon}
                      className="w-[14px] h-[14px] mr-[5px]"
                    ></img>
                    <p className="text-white text-[14px] flex items-center justify-center">
                      Last Round Details
                    </p>
                  </div>
                </div>
              </div>
              <p className="dark:text-black">$95,864</p>
              <p className="text-[14px] dark:text-[#ADADAD]">Prize pot</p>
              <div
                style={{ position: "relative" }}
                className="my-[20px] flex justify-center items-center"
              >
                <div class="divide-x divide-dashed bg-[#fff] flex">
                  <div className="bg-[#5AE6D3] w-[40px] h-[60px]"></div>
                  <div className="bg-[#5AE6D3] grid grid-cols-4 gap-3 items-center px-[34px]">
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                  </div>
                </div>
                <img
                  src={Images.Ellipse}
                  style={{ position: "absolute", left: "-12px", top: "27px" }}
                ></img>
                <div>
                  <img src={Icons.Button} className="ml-[10px]"></img>
                </div>
              </div>
              <p className="text-[14px] dark:text-[#000]">Winning Number</p>
              <button class="bg-[#333333] w-[161px] h-[40px] font-bold py-1 px-5 rounded-[25px] ml-[10px] mt-[20px] ">
                <p className="flex items-center justify-center w-[125px] h-[16px] text-[16px] text-white">
                  Connect Wallet
                </p>
              </button>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] flex justify-center py-[40px] lg:px-[450px] px-0 text-[36px]">
          <div
            class="flex justify-center hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home"
            role="tabpanel"
            style={{ display: "flex" }}
            aria-labelledby="tabs-home-tab"
            data-te-tab-active
          >
            <p>Finished Rounds</p>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-[15px] bg-[#fff] w-full h-[450px] flex flex-col justify-center items-center">
              <div className="mb-[80px]">
                <div className="absolute left-0 top-[20px] ml-[10px]">
                  <p className="text-black text-[32px] flex items-center justify-left">
                    Round #15
                  </p>
                  <p className="text-black text-[14px] flex items-center justify-center">
                    End time: Mar 3, 2023, 12:00 PM
                  </p>
                </div>
                <div className="absolute right-0 top-[20px]">
                  <div className="flex justify-center w-[172px] h-[41px] bg-[#333333] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    <img
                      src={Icons.Icon}
                      className="w-[14px] h-[14px] mr-[5px]"
                    ></img>
                    <p className="text-white text-[14px] flex items-center justify-center">
                      Last Round Details
                    </p>
                  </div>
                </div>
              </div>
              <p className="dark:text-black">$95,864</p>
              <p className="text-[14px] dark:text-[#ADADAD]">Prize pot</p>
              <div
                style={{ position: "relative" }}
                className="my-[20px] flex justify-center items-center"
              >
                <div class="divide-x divide-dashed bg-[#fff] flex">
                  <div className="bg-[#5AE6D3] w-[40px] h-[60px]"></div>
                  <div className="bg-[#5AE6D3] grid grid-cols-6 gap-3 items-center px-[34px]">
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                  </div>
                </div>
                <img
                  src={Images.Ellipse}
                  style={{ position: "absolute", left: "-12px", top: "27px" }}
                ></img>
                <div>
                  <img src={Icons.Button} className="ml-[10px]"></img>
                </div>
              </div>
              <p className="text-[14px] dark:text-[#000]">Winning Number</p>
              <button class="bg-[#333333] w-[161px] h-[40px] font-bold py-1 px-5 rounded-[25px] ml-[10px] mt-[20px] ">
                <p className="flex items-center justify-center w-[125px] h-[16px] text-[16px] text-white">
                  Connect Wallet
                </p>
              </button>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] flex justify-center py-[40px] lg:px-[450px] px-0 text-[36px]">
          <div
            class="flex justify-center hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home"
            role="tabpanel"
            style={{ display: "flex" }}
            aria-labelledby="tabs-home-tab"
            data-te-tab-active
          >
            <p>Finished Rounds</p>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-[15px] bg-[#fff] w-full h-[450px] flex flex-col justify-center items-center">
              <div className="mb-[80px]">
                <div className="absolute left-0 top-[20px] ml-[10px]">
                  <p className="text-black text-[32px] flex items-center justify-left">
                    Round #15
                  </p>
                  <p className="text-black text-[14px] flex items-center justify-center">
                    End time: Mar 3, 2023, 12:00 PM
                  </p>
                </div>
                <div className="absolute right-0 top-[20px]">
                  <div className="flex justify-center w-[172px] h-[41px] bg-[#333333] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    <img
                      src={Icons.Icon}
                      className="w-[14px] h-[14px] mr-[5px]"
                    ></img>
                    <p className="text-white text-[14px] flex items-center justify-center">
                      Last Round Details
                    </p>
                  </div>
                </div>
              </div>
              <p className="dark:text-black">$95,864</p>
              <p className="text-[14px] dark:text-[#ADADAD]">Prize pot</p>
              <div
                style={{ position: "relative" }}
                className="my-[20px] flex justify-center items-center"
              >
                <div class="divide-x divide-dashed bg-[#fff] flex">
                  <img
                    src={Images.Ellipse}
                    style={{ position: "absolute", left: "-12px", top: "27px" }}
                  ></img>
                  <div className="bg-[#5AE6D3] w-[40px] h-[60px]"></div>
                  <div className="bg-[#5AE6D3] grid grid-cols-6 gap-3 items-center px-[34px]">
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                  </div>
                </div>
                <div className="flex items-center mr-[10px]">
                  <img
                    src={Icons.Plus}
                    className="w-[20px] h-[20px] mr-[10px] ml-[10px]"
                  />
                  <div className="bg-[#5AE6D3] h-[60px] items-center flex px-[7px] ">
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                  </div>
                </div>
                <div>
                  <img src={Icons.Button}></img>
                </div>
              </div>
              <p className="text-[14px] dark:text-[#000]">Winning Number</p>
              <button class="bg-[#333333] w-[161px] h-[40px] font-bold py-1 px-5 rounded-[25px] ml-[10px] mt-[20px] ">
                <p className="flex items-center justify-center w-[125px] h-[16px] text-[16px] text-white">
                  Connect Wallet
                </p>
              </button>
            </div>
          </div>
        </div>
      </TabPanel>
    </>
  );
}

function SectionTwo() {
  const [state, setState] = React.useState(false);
  const handleModal = () => {
    setState(!state);
    console.log("state", state);
  };
  return (
    <>
      <div style={{ display: state === true ? "none" : "block" }}>
        <SwapWallet display={`${state}`} id="walletmodal" />
      </div>
      <div class="flex flex-col mb-6 h-[600px] bg-[#fff] flex justify-center py-[40px] 2xl:px-[450px] px-[10px] text-[36px]">
        <div
          class="flex justify-center hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home"
          role="tabpanel"
          style={{ display: "flex" }}
          aria-labelledby="tabs-home-tab"
          data-te-tab-active
        >
          <p>Finished Rounds</p>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center mr-[10px]">
            <img src={Images.Left}></img>
          </div>
          <div className="relative rounded-[15px] bg-[#E7FFFC] w-full h-[450px] flex flex-col justify-center items-center">
            <div className="mb-[80px]">
              <div className="absolute left-0 top-[20px] ml-[10px]">
                <p className="text-black text-[32px] flex items-center justify-left">
                  Round #15
                </p>
                <p className="text-black text-[14px] flex items-center justify-center">
                  End time: Mar 3, 2023, 12:00 PM
                </p>
              </div>
              <div className="absolute right-0 top-[20px]">
                <div className="flex justify-center w-[172px] h-[41px] bg-[#333333] rounded-tl-md rounded-bl-md flex items-center justify-center">
                  <img
                    src={Icons.Icon}
                    className="w-[14px] h-[14px] mr-[5px]"
                  ></img>
                  <p className="text-white text-[14px] flex items-center justify-center">
                    Last Round Details
                  </p>
                </div>
              </div>
            </div>
            <p className="dark:text-black">$95,864</p>
            <p className="text-[14px] dark:text-[#ADADAD]">Prize pot</p>
            <div
              style={{ position: "relative" }}
              className="my-[20px] flex justify-center items-center"
            >
              <div class="divide-x divide-dashed bg-[#fff] flex">
                <img
                  src={Images.Ellipse}
                  style={{ position: "absolute", left: "-12px", top: "27px" }}
                ></img>
                <div className="bg-[#5AE6D3] w-[40px] h-[60px]"></div>
                <div className="bg-[#5AE6D3] grid grid-cols-6 gap-3 items-center px-[34px]">
                  <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                </div>
              </div>
              <div className="flex items-center mr-[10px]">
                <img
                  src={Icons.Plus}
                  className="w-[20px] h-[20px] mr-[10px] ml-[10px]"
                />
                <div className="bg-[#5AE6D3] h-[60px] items-center flex px-[7px] ">
                  <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                </div>
              </div>
              <div>
                <img src={Icons.Button}></img>
              </div>
            </div>
            <p className="text-[14px] dark:text-[#000]">Winning Number</p>
            <button
              class="bg-[#333333] w-[161px] h-[40px] font-bold py-1 px-5 rounded-[25px] ml-[10px] mt-[20px] "
              onClick={handleModal}
            >
              <p className="flex items-center justify-center w-[125px] h-[16px] text-[16px] text-white">
                Connect Wallet
              </p>
            </button>
          </div>
          <div className="flex items-center ml-[10px]">
            <img src={Images.Right}></img>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionThree() {
  return (
    <>
      <div className="flex flex-col justify-center lg:px-[450px] px-0 bg-[#5AE6D3]">
        <p className="flex justify-center min-w-[120px] !text-[36px] font-[400] my-[50px]">
          How To Play
        </p>
        <div className="flex lg:flex-row flex-col justify-center gap-4 mb-[50px]">
          <div className="lg:w-[315px] min-w-[250px] lg:h-[284px]  bg-[#333333] border-2 border-solid border-[#fff] rounded-[20px] p-[20px]">
            <p className="text-[20px] text-[#fff] text-[400]">Pick Numbers</p>
            <p className="text-[16px] text-[#fff] text-[300] mt-[10px]">
              Pick a 4 digit number by paying the fee and wait till the round
              ends.
            </p>
          </div>
          <div className="lg:w-[315px] min-w-[250px] lg:h-[284px] bg-[#333333] border-2 border-solid border-[#fff] rounded-[20px] p-[20px]">
            <p className="text-[20px] text-[#fff] text-[400]">Check rewards</p>
            <p className="text-[16px] text-[#fff] text-[300] mt-[10px]">
              After the round ends, check if you have won any rewards or not
              within one day after the round’s end time.
            </p>
          </div>
          <div className="lg:w-[315px] min-w-[250px] lg:h-[284px] bg-[#333333] border-2 border-solid border-[#fff] rounded-[20px] p-[20px]">
            <p className="text-[20px] text-[#fff] text-[400]">Claim rewards</p>
            <p className="text-[16px] text-[#fff] text-[300] mt-[10px]">
              You can claim rewards won by you at any time.The deadline is only
              for check rewards not for Claim rewards. You can claim rewards by
              specifying  individual rounds and also can claim all rewards you
              earned on the whole.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionFour() {
  return (
    <>
      <div className="lg:grid grid-rows-3 grid-flow-col grid-cols-10 h-[400px] lg:px-[450px] px-0 bg-[#E7FFFC] gap-10 p-[10px]">
        <div className="row-span-2 col-span-4 bg-[#333333] border-1 border-solid border-[#F0F2F4] rounded-[25px] mt-[20px]">
          <div className="grid grid-cols-5 gap-4 p-[10px] pt-[25px]">
            <p className="col-span-2 text-white flex items-center">3rd Prize</p>
            <div className="col-span-3 grid-cols-6 rounded-[20px]">
              <div
                className="grid grid-cols-6 gap-1 flex justify-around"
                style={{ display: "flex" }}
              >
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
              </div>
              <div className="rounded-[28px] border-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-gradient-to-r from-yellow-200 to-green-500 p-[1px] mt-[3px]">
                <div
                  className="grid grid-cols-6 gap-1 rounded-[20px] bg-[#333333] w-full flex justify-around"
                  style={{ display: "flex" }}
                >
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 p-[10px]">
            <p className="col-span-2 text-white flex items-center">3rd Prize</p>
            <div className="col-span-3 grid-cols-6 rounded-[20px]">
              <div
                className="grid grid-cols-6 gap-1 flex justify-around"
                style={{ display: "flex" }}
              >
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
              </div>
              <div className="rounded-[28px] border-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-gradient-to-r from-yellow-200 to-green-500 p-[1px] mt-[3px]">
                <div
                  className="grid grid-cols-6 gap-1 rounded-[20px] bg-[#333333] w-full flex justify-around"
                  style={{ display: "flex" }}
                >
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 p-[10px]">
            <p className="col-span-2 text-white flex items-center">3rd Prize</p>
            <div className="col-span-3 grid-cols-6 rounded-[20px]">
              <div
                className="grid grid-cols-6 gap-1 flex justify-around"
                style={{ display: "flex" }}
              >
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
              </div>
              <div className="rounded-[28px] border-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-gradient-to-r from-yellow-200 to-green-500 p-[1px] mt-[3px]">
                <div
                  className="grid grid-cols-6 gap-1 rounded-[20px] bg-[#333333] w-full flex justify-around"
                  style={{ display: "flex" }}
                >
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-1 col-span-4 bg-[#333333] border-1 border-solid border-[#F0F2F4] rounded-[25px] mb-[20px]">
          <div className="grid grid-cols-5 gap-4 p-[10px] pt-[15px]">
            <p className="col-span-2 text-white flex items-center">3rd Prize</p>
            <div className="col-span-3 grid-cols-6 rounded-[20px]">
              <div
                className="grid grid-cols-6 gap-1 flex justify-around"
                style={{ display: "flex" }}
              >
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
              </div>
              <div className="rounded-[28px] border-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-gradient-to-r from-yellow-200 to-green-500 p-[1px] mt-[3px]">
                <div
                  className="grid grid-cols-6 gap-1 rounded-[20px] bg-[#333333] w-full flex justify-around"
                  style={{ display: "flex" }}
                >
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 row-span-3 bg-[#E7FFFC] my-[20px] p-[20px]">
          <p className="text-[36px]">Winning Criteria</p>
          <div className="flex flex-row items-center mt-[20px]">
            <img src={Icons.OkSolid}></img>
            <p className="flex flex-row text-[16px] ml-[10px]">
              Position 1: Match all the 6 digits, so the pick wins a “First”
              prize.
            </p>
          </div>
          <div className="flex flex-row items-center mt-[20px]">
            <img src={Icons.OkSolid}></img>
            <p className="flex flex-row text-[16px]  ml-[10px]">
              Position 2: Match first 2 digits and last 2 digits only, not the
              third or fourth digit, so the pick wins a “Second” prize.
            </p>
          </div>
          <div className="flex flex-row items-center mt-[20px]">
            <img src={Icons.OkSolid}></img>
            <p className="flex flex-row text-[16px]  ml-[10px]">
              Position 3: Match second, third, fourth and fifth digits only, not
              the first digit or last digit, so the pick wins a “Third” prize.
            </p>
          </div>
          <div className="flex flex-row items-center mt-[20px]">
            <img src={Icons.Cancel}></img>
            <p className="flex flex-row text-[16px]  ml-[10px]">
              Even though the first 4 digits and last digit match, since the
              fifth digit is wrong, so this pick doesn’t win a prize.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionFive() {
  return (
    <>
      <div className="lg:grid grid-rows-3 grid-flow-col grid-cols-10 items-center h-[400px] lg:px-[450px] px-0 lg:mt-0 mt-[400px] bg-[#FFFFFF] gap-10">
        <div className="row-span-3 col-span-5 bg-[#fff] my-[50px]">
          <p className="text-[36px]">Winning Criteria</p>
          <p className="text-[16px] mt-[10px]">
            Lorem ipsum dolor sit amet consectetur. Vitae sed cras in at
            tristique. Dapibus et nisi non ullamcorper eu aliquet sit sodales.
            Mattis aenean sagittis tellus posuere lobortis risus quam tristique
            at. Leo ut erat vitae sit dictum magna tincidunt ut.
          </p>
        </div>
        <div className="col-span-5 row-span-3 my-[20px] p-[20px]">
          <div className="bg-[#333333] rounded-t-lg">
            <p className="flex justify-center text-white text-[400] text-[20px] py-[15px]">
              Prize Pool Allocation
            </p>
          </div>
          <table class="table-auto w-full bg-white border border-gray-300 shadow-lg rounded-2xl">
            <tbody>
              <tr className="flex justify-between p-[10px]">
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td>
                  <img src={Images.Group}></img>
                </td>
              </tr>
              <tr className="flex justify-between p-[10px]">
                <td className="flex justify-center items-center">
                  Matches All 5
                </td>
                <td>
                  <img src={Images.Group}></img>
                </td>
              </tr>
              <tr className="flex justify-between p-[10px]">
                <td className="flex justify-center items-center">
                  Matches All 6
                </td>
                <td>
                  <img src={Images.Group}></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function SectionSix() {
  return (
    <>
      <div className="lg:grid grid-rows-3 grid-flow-col grid-cols-10 items-center h-[400px] lg:px-[450px] px-0 lg:mt-0 mt-[400px] bg-[#FFFFFF] gap-10">
        <div className="row-span-3 col-span-5 bg-[#fff] my-[50px]">
          <p className="text-[36px]">Winning Criteria & Prize Allocation</p>
        </div>
        <div className="col-span-5 row-span-3 my-[20px] p-[20px]">
          <table class="table-auto w-full bg-white border border-gray-300 shadow-lg rounded-[10px]">
            <thead className="flex flex-row justify-around bg-[#333333] rounded-t-lg p-[10px]">
              <th className="flex justify-center items-center text-white text-[400] text-[20px] py-[15px]">
                123
              </th>
              <th className="flex justify-center text-white text-[400] text-[20px] py-[15px]">
                123
              </th>
              <th className="flex justify-center text-white text-[400] text-[20px] py-[15px]">
                123
              </th>
            </thead>
            <tbody className="flex flex-col p-[20px] bg-[#E7FFFC] my-[10px] mx-[10px]">
              <tr className="flex justify-around p-[10px]">
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
              </tr>
              <tr className="flex justify-around p-[10px]">
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
              </tr>
              <tr className="flex justify-around p-[10px]">
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default App;
