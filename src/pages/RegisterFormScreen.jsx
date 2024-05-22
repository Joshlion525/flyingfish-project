import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

const RegisterFormScreen = () => {
	return (
		<div className="backGround min-h-screen px-8">
			<div className="flex items-center gap-4 py-10">
				<Link to={"/home"}>
					<MdOutlineArrowBackIos className="text-white text-xl" />
				</Link>
				<div className="flex-grow">
					<h1 className="text-white text-3xl text-center font-semibold">
						<span className="border-b pb-1 inline-block">
							REGISTER
						</span>
					</h1>
				</div>
			</div>
			<div>
				<form action="">
					<div className="flex flex-col gap-2 mb-5">
						<label
							htmlFor="firstname"
							className="text-white font-thin"
						>
							First name
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white placeholder:text-white"
							id="firstname"
							placeholder="Solomon"
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label
							htmlFor="surname"
							className="text-white font-thin"
						>
							Surname
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white placeholder:text-white"
							id="surname"
							placeholder="Etrigan"
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label
							htmlFor="dateofbirth"
							className="text-white font-thin"
						>
							Date of birth
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white placeholder:text-white"
							id="dateofbirth"
							placeholder="02-03-2012"
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="email" className="text-white font-thin">
							Email Address
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white placeholder:text-white"
							id="email"
							placeholder="solomon.igwe.ng.ab-inbev.com"
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label
							htmlFor="gender"
							className="text-white font-thin"
						>
							Gender
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white placeholder:text-white"
							id="gender"
							placeholder="Male"
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="city" className="text-white font-thin">
							City
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white placeholder:text-white"
							id="city"
							placeholder="Lagos"
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label
							htmlFor="gender"
							className="text-white font-thin"
						>
							Gender
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white placeholder:text-white"
							id="gender"
							placeholder="Male"
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label
							htmlFor="number"
							className="text-white font-thin"
						>
							Phone Number
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white placeholder:text-white"
							id="number"
							placeholder="08163146287"
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="code" className="text-white font-thin">
							Unique Code
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white placeholder:text-white"
							id="code"
							placeholder="SE054321"
						/>
					</div>
					<Link to={"/thankyou"}>
						<button
							type="submit"
							className="bg-[#a5ce41] text-white w-full py-4 my-6 rounded-lg"
						>
							CREATE
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default RegisterFormScreen;
