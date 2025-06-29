import React from "react";
import { Flex } from "@chakra-ui/react";

import SettingsSwitch from "../Inputs/SettingsSwitch";
import SettingsTextArea from "../Inputs/SettingsTextArea";
import SettingsTextInput from "../Inputs/SettingsTextInput";
import SettingsBox from "../SettingsBox";

export interface IpFilteringProps {}

const IpFiltering = (props: IpFilteringProps) => {
	return (
		<SettingsBox title={"IP Filtering"}>
			<Flex gap={3} width="full">
				<SettingsSwitch label="Enabled" settingKey="ip_filter_enabled" labelAbove />
				<SettingsTextInput label={"Filter Path (.dat, .p2p, .p2b)"} settingKey="ip_filter_path" />
			</Flex>
			<SettingsSwitch label={"Apply to trackers"} settingKey="ip_filter_trackers" />
			<SettingsTextArea label={"Banned IPs"} settingKey="banned_IPs" />
		</SettingsBox>
	);
};

export default IpFiltering;
