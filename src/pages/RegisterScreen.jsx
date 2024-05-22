import React, { useState, useEffect } from "react";
import flyingFishLogo from "../assets/FFLogo2.svg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const RegisterScreen = () => {
	const eventDate = new Date("December 31, 2024 00:00:00").getTime();
	const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

	const padZero = (num) => {
		return num.toString().padStart(2, "0");
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			const difference = eventDate - new Date().getTime();
			setTimeLeft(difference);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [eventDate]);

	const days = padZero(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
	const hours = padZero(
		Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	);
	const minutes = padZero(
		Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
	);
	const seconds = padZero(Math.floor((timeLeft % (1000 * 60)) / 1000));

	return (
		<div className="backGround flex flex-col justify-between min-h-screen">
			<div>
				<div className="flex justify-center py-10">
					<img
						src={flyingFishLogo}
						alt=""
						className="w-full max-w-[200px]"
					/>
				</div>
				<div className="text-center text-white">
					<h1 className="font-bold text-xl mb-6">
						COUNTDOWN TO LIVE DRAW
					</h1>
					<div className="flex justify-center gap-1">
						<div>
							<span className="span">{days}</span>
							<p>Days</p>
						</div>{" "}
						:
						<div>
							<span className="span">{hours}</span>
							<p>Hours</p>
						</div>{" "}
						:
						<div>
							<span className="span">{minutes}</span>
							<p>Minutes</p>
						</div>{" "}
						:
						<div>
							<span className="span">{seconds}</span>
							<p>Seconds</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center gap-4 px-3 mt-14 md:flex-row font-bold">
					<Link
						to={"/registerform"}
						className="text-white text-center bg-[#f16c71] rounded-xl py-4 md:px-8"
					>
						REGISTER
					</Link>
					<Link
						to={"/howtoparticipate"}
						className="text-white text-center bg-[#0872ba] rounded-xl py-4 md:px-8"
					>
						HOW TO PARTICIPATE
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default RegisterScreen;
