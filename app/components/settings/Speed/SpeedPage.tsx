import React from "react";

import { TorrSettingsSchedulerDays } from "@/types";
import type { SettingsSelectOption } from "../Inputs/SettingsSelect";
import { AlternativeRateLimits } from "./AlternativeRateLimits";
import { GlobalRateLimits } from "./GlobalRateLimits";
import { RateLimitingSettings } from "./RateLimitingSettings";

const SpeedPage = () => {
	const SchedulerDays: SettingsSelectOption[] = [
		{
			value: TorrSettingsSchedulerDays.EveryDay,
			label: "Every Day",
		},
		{
			value: TorrSettingsSchedulerDays.EveryWeekday,
			label: "Every Week Day",
		},
		{
			value: TorrSettingsSchedulerDays.EveryWeekend,
			label: "Every Weekend",
		},
		{
			value: TorrSettingsSchedulerDays.EveryMonday,
			label: "Every Monday",
		},
		{
			value: TorrSettingsSchedulerDays.EveryTuesday,
			label: "Every Tuesday",
		},
		{
			value: TorrSettingsSchedulerDays.EveryWednesday,
			label: "Every Wednesday",
		},
		{
			value: TorrSettingsSchedulerDays.EveryThursday,
			label: "Every Thursday",
		},
		{
			value: TorrSettingsSchedulerDays.EveryFriday,
			label: "Every Friday",
		},
		{
			value: TorrSettingsSchedulerDays.EverySaturday,
			label: "Every Saturday",
		},
		{
			value: TorrSettingsSchedulerDays.EverySunday,
			label: "Every Sunday",
		},
	];

	return (
		<>
			<GlobalRateLimits />
			<AlternativeRateLimits options={SchedulerDays} />
			<RateLimitingSettings />
		</>
	);
};

export default SpeedPage;
