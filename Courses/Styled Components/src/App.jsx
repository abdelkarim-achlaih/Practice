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
				<Section text="M" day={1} progress={100} />
				<Section text="T" day={2} progress={80} />
				<Section text="W" day={3} progress={60} />
				<Section text="T" day={4} progress={40} />
				<Section text="F" day={5} progress={20} />
				<Section text="S" day={6} progress={10} />
				<Section text="S" day={7} progress={5} />
			</div>
		</>
	);
}
