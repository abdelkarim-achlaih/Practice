import React from "react";
import styled from "styled-components";
import Section from "./components/Section";

const Title = styled.h1`
	color: #b19cd9;
`;

export default function App() {
	return (
		<>
			<Title>Progress Tracker</Title>
			<div>
				<Section text="M" progress={{ value: "100%", color: "tomato" }} />
				<Section text="T" progress={{ value: "80%", color: "tomato" }} />
				<Section text="W" progress={{ value: "60%", color: "tomato" }} />
				<Section text="T" progress={{ value: "40%", color: "tomato" }} />
				<Section text="F" progress={{ value: "20%", color: "tomato" }} />
				<Section text="S" progress={{ value: "10%", color: "tomato" }} />
				<Section text="S" progress={{ value: "5%", color: "tomato" }} />
			</div>
		</>
	);
}
