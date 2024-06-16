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
		if (progress >= 80) return "#FFB3BA";
		else if (progress >= 60) return "#FFDFBA";
		else if (progress >= 40) return "#FFFFBA";
		else return "#BAFFC9";
	}};
	height: 100%;
`;

const TodayProgressBar = styled(ProgressBar)`
	background-color: purple;
`;

export default function Section({ text, progress, day }) {
	return (
		<StyledSection>
			{text === "S" ? (
				<WeekendTitle>{text}</WeekendTitle>
			) : (
				<WeekdayTitle>{text}</WeekdayTitle>
			)}

			<ProgressSection>
				{day === new Date().getDay() ? (
					<TodayProgressBar progress={progress} />
				) : (
					<ProgressBar progress={progress} />
				)}
			</ProgressSection>
		</StyledSection>
	);
}
