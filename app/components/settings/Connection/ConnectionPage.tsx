import React from "react";

import { TorrSettingsBitTorrentProtocol } from "@/types";
import SettingsSelect, { SettingsSelectOption } from "../Inputs/SettingsSelect";
import SettingsSwitch from "../Inputs/SettingsSwitch";
import SettingsTextInput from "../Inputs/SettingsTextInput";
import SettingsBox from "../SettingsBox";
import ConnectionLimits from "./ConnectionLimits";
import IpFiltering from "./IP Filtering";
import ProxyServer from "./ProxyServer";

const ConnectionPage = () => {
	const protocolOptions: SettingsSelectOption[] = [
		{ label: "TCP and μTP", value: TorrSettingsBitTorrentProtocol.tcpANDutp },
		{ label: "TCP", value: TorrSettingsBitTorrentProtocol.tcp },
		{ label: "μTP", value: TorrSettingsBitTorrentProtocol.utp },
	];

	return (
		<>
			<SettingsBox>
				<SettingsSelect label={"Peer Connection Protocol"} settingKey={"bittorrent_protocol"} options={protocolOptions} />
			</SettingsBox>
			<SettingsBox title={"Listening Port"}>
				<SettingsTextInput label={"Port Used for Incoming Connections"} settingKey={"listen_port"} />
				<SettingsSwitch label={"Use UPnP / NAT-PMP port forwarding from my router"} settingKey={"upnp"} />
			</SettingsBox>
			<ConnectionLimits />
			<ProxyServer />
			<IpFiltering />
		</>
	);
};

export default ConnectionPage;
