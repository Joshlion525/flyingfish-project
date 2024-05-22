import React from "react";
import img from "../assets/Ellipse21.png";
import logo from "../assets/Group9.svg";
import flyingFishLogo from "../assets/FFLogo2.svg";
import { flushSync } from "react-dom";

const ThankyouScreen = () => {
	return (
		<div className="backGround min-h-screen flex flex-col justify-between text-white">
			<div className="flex flex-col items-center justify-center px-8 text-center mt-16 ">
				<img src={img} alt="" className="w-[40%]" />
				<h1 className="font-semibold text-3xl my-7">THANK YOU FOR REGISTERING</h1>
				<p className="text-lg font-bold">
					You will recieve an email notification shortly after
					registering containing your unique code. See you at the
					draw!{" "}
				</p>
			</div>
			<div className="flex flex-row justify-between p-4 text-white text-xs">
				<div className="flex gap-1 items-center">
					<img src={logo} alt="" />
					<p>Drink Responsibly</p>
				</div>
				<img src={flyingFishLogo} alt="" className="w-[10%]" />
			</div>
		</div>
	);
};

export default ThankyouScreen;
