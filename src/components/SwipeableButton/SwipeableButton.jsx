import React, { useRef, useState } from "react";
import "./SwipeableButton.css";
import { useNavigate } from "react-router-dom";

const SwipeableButton = (props) => {
	const slider = useRef(null);
	const container = useRef(null);
	const navigate = useNavigate();
	const [unlocked, setUnlocked] = useState(false);
	let isDragging = false;
	let startX = 0;
	let sliderLeft = 0;
	const containerWidth = container.current
		? container.current.clientWidth - 50
		: 0;

	const onDrag = (e) => {
		if (!isDragging || unlocked) return;
		const clientX = e.touches ? e.touches[0].clientX : e.clientX;
		sliderLeft = Math.min(Math.max(0, clientX - startX), containerWidth);
		updateSliderStyle();
	};

	const updateSliderStyle = () => {
		if (unlocked) return;
		slider.current.style.left = sliderLeft + "px";
	};

	const stopDrag = () => {
		if (!isDragging || unlocked) return;
		isDragging = false;
		if (sliderLeft > containerWidth * 0.9) {
			sliderLeft = containerWidth;
			if (props.onSuccess) {
				props.onSuccess();
				onSuccess();
			}
		} else {
			sliderLeft = 0;
			if (props.onFailure) {
				props.onFailure();
			}
		}
		updateSliderStyle();
	};

	const startDrag = (e) => {
		if (unlocked) return;
		isDragging = true;
		const clientX = e.touches ? e.touches[0].clientX : e.clientX;
		startX = clientX;
	};

	const onSuccess = () => {
		container.current.style.width = container.current.clientWidth + "px";
		setUnlocked(true);
		navigate("/home"); 
	};

	return (
		<div className="ReactSwipeButton">
			<div
				className={
					"rsbContainer " + (unlocked ? "rsbContainerUnlocked" : "")
				}
				ref={container}
			>
				<div
					className="rsbcSlider"
					ref={slider}
					onMouseDown={startDrag}
					onTouchStart={startDrag}
					onTouchMove={onDrag}
					onMouseMove={onDrag}
					onTouchEnd={stopDrag}
					onMouseUp={stopDrag}
					style={{ background: props.color }}
				>
					<span className="rsbcSliderArrow"></span>
					<span
						className="rsbcSliderCircle"
						style={{ background: props.color }}
					></span>
				</div>
				<div className="rsbcText">
					{unlocked
						? props.text_unlocked || "I'm 18 years +"
						: props.text || "SLIDE"}
				</div>
			</div>
		</div>
	);
};

export default SwipeableButton;
