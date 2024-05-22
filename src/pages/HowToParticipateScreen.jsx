import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HowToParticipateScreen = () => {
	return (
		<div className="backGround flex flex-col justify-between min-h-screen ">
			<div className="px-8">
				<div className="flex items-center gap-4 py-10">
					<Link to={"/home"}>
						<MdOutlineArrowBackIos className="text-white text-xl" />
					</Link>
					<h1 className=" text-white text-2xl border-b pb-1 font-semibold">
						HOW TO PARTICIPATE
					</h1>
				</div>
				<div className="flex flex-col gap-8 text-base text-white">
					<div className="flex gap-3">
						<p>1.</p>
						<p>Buy a bottle of flying fish.</p>
					</div>
					<div className="flex items-start gap-3">
						<p>2.</p>
						<p>
							Scan the QR Code on the crown cork to visit the
							landing page and enter the unique code under crown
							cork on the page.
						</p>
					</div>
					<div className="flex items-start gap-3">
						<p>3.</p>
						<p>Fill the form and entered the required details.</p>
					</div>
					<div className="flex items-start gap-3">
						<p>4.</p>
						<p>Receive confirmation of entry email.</p>
					</div>
					<div className="flex items-start gap-3">
						<p>5.</p>
						<p>Arrive at the event for the live show.</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default HowToParticipateScreen;
