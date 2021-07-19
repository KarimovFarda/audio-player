import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import '../index.scss'
import { useState } from "react";
const Nav = ({ libraryStatus, setLibraryStatus }:any) => {
	const [opacity,setOpacity] = useState(0)
	return (
		<NavContainer>
			<Button>
				Playlist
				<FontAwesomeIcon icon={faMusic} />
			</Button>
			
		</NavContainer>
	);
};

const NavContainer = styled.div`
	min-height: 10vh;
	display: flex;
	
	justify-content: space-around;
	align-items: center;
	@media screen and (max-width: 768px) {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
	}
`;

const Button = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	border: 2px solid rgb(65, 65, 65);
	padding: 0.5rem;
	transition: all 0.3s ease;
	&:hover {
		background: rgb(65, 65, 65);
		color: white;
	}
`;

export default Nav;