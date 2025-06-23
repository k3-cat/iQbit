import { Heading, Image, VStack } from "@chakra-ui/react";

import roundLogo from "../images/logo_round.png";

const LogoHeader = () => {
	return (
		<VStack justifyContent={"center"}>
			<Image alt={"iQbit logo"} src={roundLogo} maxW={150} />
			<Heading size={"4xl"}>iQbit</Heading>
			<span>Powered by qBitTorrent</span>
		</VStack>
	);
};

export default LogoHeader;
