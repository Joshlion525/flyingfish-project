import React from "react";
import flyingFishLogo from "../assets/FFLogo2.svg";
import { Link } from "react-router-dom";

const NotLegalScreen = () => {
	return (
		<div className="backGround min-h-screen flex flex-col justify-between px-8">
			<div className="flex flex-col gap-10">
				<div className="flex justify-center my-14">
					<img src={flyingFishLogo} alt="" />
				</div>
				<div>
					<h1 className="text-3xl font-bold text-red-500 text-center">
						YOU MUST BE OF LEGAL DRINKING AGE TO ENTER THIS
						EXPERIENCE...
					</h1>
				</div>
			</div>
			<div className=" py-4">
				<Link to={"/privacypolicy"}>
					<p className="text-xs text-white text-center font-thin">
						By continuing on this site, you agree to our{" "}
						<b className="font-bold">Terms of Service</b> and{" "}
						<b className="font-bold">Privacy Policy</b>
					</p>
				</Link>
			</div>
		</div>
	);
};

export default NotLegalScreen;
