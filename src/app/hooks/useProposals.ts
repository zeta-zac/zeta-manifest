"use client";
import { useCallback, useState } from "react";
import { BLOCKFROST_URL, PRJ_ID } from "../constants"; // Keep PRJ_ID
import type {
	Proposal,
	ProposalListItem,
	ProposalMetadataBody,
	ProposalMetadataResponse,
	Vote,
} from "../types/proposal";

// --- Hook Implementation ---

const HEADERS = {
	project_id: PRJ_ID,
};

export const useProposals = () => {
	const [proposals, setProposals] = useState<Proposal[]>([]);
	// REMOVED: votedProposalKeys state
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const createProposalKey = useCallback(
		(txHash: string, certIndex: number): string => {
			return `${txHash}/${certIndex}`;
		},
		[],
	);

	const fetchProposalsList = useCallback(async (): Promise<
		ProposalListItem[]
	> => {
		const response = await fetch(`${BLOCKFROST_URL}/governance/proposals`, {
			headers: HEADERS,
		});
		if (!response.ok) {
			throw new Error(
				`Failed to fetch proposal list: ${response.status} ${response.statusText}`,
			);
		}
		return response.json();
	}, []);

	const fetchProposalMetadata = useCallback(
		async (
			proposalItem: ProposalListItem,
		): Promise<ProposalMetadataResponse | null> => {
			// ... (fetchProposalMetadata implementation remains the same) ...
			try {
				const response = await fetch(
					`${BLOCKFROST_URL}/governance/proposals/${proposalItem.tx_hash}/${proposalItem.cert_index}/metadata`,
					{ headers: HEADERS },
				);
				if (!response.ok) {
					console.warn(
						`Failed to fetch metadata for ${proposalItem.tx_hash}/${proposalItem.cert_index}: ${response.status}`,
					);
					return null; // Don't let one failed metadata fetch stop everything
				}
				return response.json();
			} catch (err) {
				console.error(
					`Error fetching metadata for ${proposalItem.tx_hash}/${proposalItem.cert_index}:`,
					err,
				);
				return null;
			}
		},
		[],
	);

	// REMOVED: fetchDRepVotes function

	const fetchProposalVotes = useCallback(
		async (txHash: string, certIndex: number): Promise<Vote[]> => {
			const response = await fetch(
				`${BLOCKFROST_URL}/governance/proposals/${txHash}/${certIndex}/votes`,
				{ headers: HEADERS },
			);
			if (!response.ok) {
				// Consider more specific error handling or logging
				throw new Error(
					`Failed to fetch votes for ${txHash}/${certIndex}: ${response.status} ${response.statusText}`,
				);
			}
			return response.json();
		},
		[],
	);

	const loadProposals = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const proposalsListData = await fetchProposalsList();
			const metadataPromises = proposalsListData.map((p) =>
				fetchProposalMetadata(p),
			);
			const metadataResults = await Promise.allSettled(metadataPromises);

			// 3. Merge proposal list data with fetched metadata
			const enrichedProposals = proposalsListData.map((proposalItem, index) => {
				const metadataResult = metadataResults[index];
				let metadataBody: ProposalMetadataBody = {};

				if (
					metadataResult.status === "fulfilled" &&
					metadataResult.value?.json_metadata?.body
				) {
					metadataBody = metadataResult.value.json_metadata.body;
				}

				return {
					...proposalItem,
					...metadataBody,
				};
			});
			setProposals(enrichedProposals);

			// REMOVED: Step 4 fetching DRep votes and setting votedProposalKeys
		} catch (err) {
			if (err instanceof Error) {
				console.error("Error loading proposals data:", err);
				setError(err.message);
			} else {
				console.error("An unexpected error occurred during loading:", err);
				setError("An unexpected error occurred");
			}
			setProposals([]); // Clear proposals on error
			// REMOVED: Clearing votedProposalKeys
		} finally {
			setIsLoading(false);
		}
	}, [fetchProposalsList, fetchProposalMetadata]);

	const getDRepVoteOnProposal = useCallback(
		async (
			txHash: string,
			certIndex: number,
			drepId: string,
		): Promise<Vote["vote"] | null> => {
			try {
				console.log(" HEURHIEHIUAHDUIHIUADSHUISAHDUIH");
				const votes = await fetchProposalVotes(txHash, certIndex);
				console.log("votes", votes);
				const drepVote = votes.find((vote) => vote.drep_id === drepId);

				if (drepVote) console.log("drepVote.vote", drepVote.vote);
				return drepVote ? drepVote.vote : null;
			} catch (error) {
				console.error(
					`Error fetching or processing votes for ${txHash}/${certIndex} and DRep ${drepId}:`,
					error,
				);
				// Depending on requirements, you might want to throw the error
				// or return a specific state indicating an error occurred.
				return null; // Return null on error for simplicity
			}
		},
		[fetchProposalVotes],
	);

	return {
		proposals,
		// REMOVED: votedProposalKeys
		isLoading,
		error,
		loadProposals,
		createProposalKey, // Keep if needed for component filtering logic
		getDRepVoteOnProposal, // Export the new function
	};
};
