import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
	background-color: #ffffff;
	border: solid 3px grey;
	margin: 4px;
	width: 300px;
	height: 50px;
	border-radius: 10px;
	display: flex;
	justify-content: left;
	font-size: 40px;
	color: #ff6961;
	overflow: hidden;
`;
const WeekdayTitle = styled.div`
	display: flex;
	justify-content: center;
	width: 50px;
	border-right: solid 3px lightgrey;
`;

const WeekendTitle = styled(WeekdayTitle)`
	background-color: lightgrey;
`;

const ProgressSection = styled.div`
	width: 250px;
`;

const ProgressBar = styled.div`
	width: ${({ progress }) => (progress ? `${progress}%` : "0")};
	background-color: ${({ progress }) => {
		if (progress >= 80) return "red";
		else if (progress >= 60) return "orange";
		else if (progress >= 40) return "yellow";
		else return "green";
	}};
	height: 100%;
`;

export default function Section({ text, progress }) {
	return (
		<StyledSection>
			{text === "S" ? (
				<WeekendTitle>{text}</WeekendTitle>
			) : (
				<WeekdayTitle>{text}</WeekdayTitle>
			)}

			<ProgressSection>
				<ProgressBar progress={progress} />
			</ProgressSection>
		</StyledSection>
	);
}
