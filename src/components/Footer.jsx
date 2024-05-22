import React from "react";
import logo from "../assets/Group9.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="w-full flex justify-between items-center px-3 py-4 text-white text-xs mt-10">
			<div className="flex gap-1 items-center">
				<img src={logo} alt="" />
				<p>Drink Responsibly</p>
			</div>
			<div>
				<Link to={"/privacypolicy"}>Terms of Service | Privacy</Link>
			</div>
		</div>
	);
};

export default Footer;
