import React from "react";

import SettingsSwitch from "../Inputs/SettingsSwitch";
import RequestMoreSettings from "../RequestMoreSettings";
import SettingsBox from "../SettingsBox";
import SavingManagement from "./SavingManagement";
import WhenAddingTorrent from "./WhenAddingTorrent";

export interface DownloadsPageProps {}

const DownloadsPage = (props: DownloadsPageProps) => {
	return (
		<>
			<WhenAddingTorrent />
			<SettingsBox>
				<SettingsSwitch label={"Pre-allocate disk space for all files"} settingKey="preallocate_all" />
				<SettingsSwitch label={"Append .!qB extension to incomplete files"} settingKey="incomplete_files_ext" />
			</SettingsBox>
			<SavingManagement />
			<RequestMoreSettings />
		</>
	);
};

export default DownloadsPage;
