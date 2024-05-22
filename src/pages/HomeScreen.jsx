import React, { useEffect, useState } from "react";
import flyingFishLogo from "../assets/FFLogo2.svg";
import { Link } from "react-router-dom";
import SwipeableButton from "../components/SwipeableButton/SwipeableButton";

const HomeScreen = () => {
	const [showModal, setShowModal] = useState(true);
	const [isChecked, setIsChecked] = useState(false);

	const closeModal = () => {
		if (isChecked) {
			setShowModal(false);
		} else {
			alert("Please agree to our terms & conditions");
		}
	};
	const onSuccess = () => {
		console.log("Yay! Swipe Success");
	};
	return (
		<div className="backGround min-h-screen flex flex-col justify-between">
			{showModal && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div className="bg-white w-[80%] p-3 max-h-[55%] overflow-auto">
						<h1 className="text-xs leading-7 font-semibold">
							Terms & Conditions | Privacy Policy
						</h1>
						<p className="text-xs leading-7">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Saepe eaque molestias architecto vitae aliquam
							illo? Aperiam laudantium reprehenderit odit eius
							culpa possimus! Qui ipsam ea dolore asperiores,
							dolorem consequatur amet! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Incidunt autem, Lorem
							ipsum dolor sit, amet consectetur adipisicing elit.
							Ratione repudiandae ab dolore ex, sunt dolorem
							corrupti molestias repellendus quaerat doloremque
							est dolores iste rerum labore et minus veritatis ad
							nostrum.
						</p>
						<div className="text-xs flex items-center gap-2 my-5">
							<input
								type="checkbox"
								id="agree"
								checked={isChecked}
								onChange={() => setIsChecked(!isChecked)}
							/>
							<label htmlFor="agree">
								I agree to all terms & conditions
							</label>
						</div>
						<div className="flex justify-end">
							<button
								className="bg-[#5f5f5f] hover:bg-[#F16C71] text-white py-1 px-4 rounded-md"
								onClick={closeModal}
							>
								Continue
							</button>
						</div>
					</div>
				</div>
			)}
			<div>
				<div className="flex justify-center my-14">
					<img src={flyingFishLogo} alt="" />
				</div>
				<div className="text-center">
					<h1 className="text-red-500 font-bold text-3xl my-8">
						SLIDE IF YOU'RE 18 YEARS OR OVER
					</h1>
					<SwipeableButton
						onSuccess={onSuccess}
						color="#3A91BE"
						text="Slide here"
					/>
					<Link to={"/notlegal"}>
						<p className="text-white font-semibold mt-8">
							Tap here if you're under 18
						</p>
					</Link>
				</div>
			</div>
			<div className="px-8 py-4">
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

export default HomeScreen;
