import React from "react";
import { useQuery } from "react-query";
import { Alert, AlertDescription, AlertTitle, Box, Center, Spinner, VStack } from "@chakra-ui/react";

import { getAnnouncements } from "../AnnouncementChecker";

const AllAnnouncementsPage = () => {
	const { data, isLoading } = useQuery("getAllAnnouncements", getAnnouncements);

	if (isLoading) {
		return (
			<Center mt={12}>
				<Spinner />
			</Center>
		);
	}

	return (
		<VStack gap={3} py={5}>
			{data?.announcements.map((item) => (
				<Alert variant="subtle" key={item.id} rounded="md">
					<Box>
						<AlertTitle>{item.title}</AlertTitle>
						<AlertDescription>{item.body}</AlertDescription>
					</Box>
				</Alert>
			))}
		</VStack>
	);
};

export default AllAnnouncementsPage;
