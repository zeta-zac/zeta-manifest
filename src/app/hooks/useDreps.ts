"use client";
import { useCallback, useState } from "react";
import { BLOCKFROST_URL, PRJ_ID } from "../constants"; // Assuming PRJ_ID is needed
import type { DRepDetails, DRepListItem, DRepVote } from "../types/drep";

const HEADERS = {
	project_id: PRJ_ID,
};

export const useDreps = () => {
	const [drepsList, setDrepsList] = useState<DRepListItem[]>([]);
	// Use maps for details and votes, keyed by drep_id
	const [drepDetailsMap, setDrepDetailsMap] = useState<
		Map<string, DRepDetails>
	>(new Map());
	const [drepVotesMap, setDrepVotesMap] = useState<Map<string, DRepVote[]>>(
		new Map(),
	);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	// Fetch the list of all registered DReps
	const fetchDreps = useCallback(async (): Promise<DRepListItem[]> => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(`${BLOCKFROST_URL}/governance/dreps`, {
				headers: HEADERS,
			});
			if (!response.ok) {
				throw new Error(
					`Failed to fetch DRep list: ${response.status} ${response.statusText}`,
				);
			}
			const data: DRepListItem[] = await response.json();
			setDrepsList(data);
			return data;
		} catch (err) {
			const errorMsg =
				err instanceof Error ? err.message : "An unexpected error occurred";
			console.error("Error fetching DRep list:", err);
			setError(errorMsg);
			setDrepsList([]);
			throw err; // Re-throw for potential handling upstream
		} finally {
			setIsLoading(false);
		}
	}, []);

	// Fetch details/metadata for a specific DRep
	const fetchDrepDetails = useCallback(
		async (drepId: string): Promise<DRepDetails | null> => {
			// Optionally set loading state specific to this DRep if needed
			// setIsLoading(true);
			// setError(null);
			try {
				const response = await fetch(
					`${BLOCKFROST_URL}/governance/dreps/${drepId}`,
					{ headers: HEADERS },
				);
				if (!response.ok) {
					// Handle 404 specifically if needed (DRep not found)
					if (response.status === 404) {
						console.warn(`DRep details not found for ${drepId}`);
						return null;
					}
					throw new Error(
						`Failed to fetch DRep details for ${drepId}: ${response.status} ${response.statusText}`,
					);
				}
				const data: DRepDetails = await response.json();
				setDrepDetailsMap((prevMap) => new Map(prevMap).set(drepId, data));
				return data;
			} catch (err) {
				const errorMsg =
					err instanceof Error ? err.message : "An unexpected error occurred";
				console.error(`Error fetching DRep details for ${drepId}:`, errorMsg);
				// Optionally set error state specific to this DRep
				// setError(errorMsg);
				return null; // Indicate failure
			} finally {
				// setIsLoading(false);
			}
		},
		[],
	);

	// Fetch votes cast by a specific DRep
	const fetchDrepVotes = useCallback(
		async (drepId: string): Promise<DRepVote[]> => {
			// Optionally set loading state specific to this DRep's votes
			try {
				const response = await fetch(
					`${BLOCKFROST_URL}/governance/dreps/${drepId}/votes`,
					{ headers: HEADERS },
				);
				if (!response.ok) {
					if (response.status === 404) {
						console.log(`DRep ${drepId} has not voted yet.`);
						setDrepVotesMap((prevMap) => new Map(prevMap).set(drepId, []));
						return []; // Return empty array if no votes found
					}
					throw new Error(
						`Failed to fetch DRep votes for ${drepId}: ${response.status} ${response.statusText}`,
					);
				}

				const data: DRepVote[] = await response.json();

				console.log(data);
				setDrepVotesMap((prevMap) => new Map(prevMap).set(drepId, data));
				// console.log(`Fetched votes for DRep ${drepId}:`, data);
				return data;
			} catch (err) {
				const errorMsg =
					err instanceof Error ? err.message : "An unexpected error occurred";
				console.error(`Error fetching DRep votes for ${drepId}:`, errorMsg);
				// Optionally set error state specific to this DRep's votes
				return []; // Return empty array on error
			} finally {
				// Optionally update loading state
			}
		},
		[],
	);

	return {
		drepsList,
		drepDetailsMap,
		drepVotesMap,
		isLoading,
		error,
		fetchDreps,
		fetchDrepDetails,
		fetchDrepVotes,
	};
};
