"use client";
import { type FC, useEffect, useMemo } from "react"; // Added useMemo
import { DREP_ID } from "../constants"; // Import DREP_ID
import { useDreps } from "../hooks/useDreps"; // Import useDreps
import { useProposals } from "../hooks/useProposals";
import ProposalCard from "./ProposalCard";

const Proposals: FC = () => {
	// Use the proposals hook
	const {
		proposals,
		isLoading: isLoadingProposals, // Rename to avoid clash
		error: errorProposals, // Rename to avoid clash
		loadProposals,
		createProposalKey,
	} = useProposals();

	// Use the dreps hook
	const {
		drepVotesMap,
		fetchDrepVotes,
		isLoading: isLoadingVotes, // Rename to avoid clash
		error: errorVotes, // Rename to avoid clash
	} = useDreps();

	// Fetch proposals and votes for the specific DREP_ID when the component mounts
	useEffect(() => {
		loadProposals();
		if (DREP_ID) {
			fetchDrepVotes(DREP_ID);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loadProposals, fetchDrepVotes]); // Add fetchDrepVotes to dependency array

	// Combine loading states
	const isLoading = isLoadingProposals || isLoadingVotes;
	// Combine errors (show first error encountered)
	const error = errorProposals || errorVotes;

	// Create a set of voted proposal keys based on the fetched votes for DREP_ID
	const votedProposalKeys = useMemo(() => {
		const votes = drepVotesMap.get(DREP_ID);
		console.log(`Votes found for DREP_ID ${DREP_ID}:`, votes); // <-- Log votes
		if (!votes) {
			return new Set<string>();
		}
		const keys = new Set<string>(
			votes.map((vote) => createProposalKey(vote.tx_hash, vote.cert_index)),
		);
		console.log("Generated votedProposalKeys:", keys); // <-- Log generated keys
		return keys;
	}, [drepVotesMap, createProposalKey]); // Recompute only when votes or key function changes

	// Filter proposals to show only those voted on by DREP_ID
	const filteredProposals = useMemo(() => {
		// Log proposals to compare keys
		console.log("All proposals for filtering:", proposals);
		if (votedProposalKeys.size === 0) {
			// If no votes fetched or DREP hasn't voted, show nothing or a message
			// Or return proposals; to show all if that's desired when no votes found
			console.log("Filtering resulted in empty due to no voted keys."); // <-- Log reason for empty
			return [];
		}
		const filtered = proposals.filter((proposal) => {
			const key = createProposalKey(proposal.tx_hash, proposal.cert_index);

			console.log(`Proposal key: ${key}, Voted: ${votedProposalKeys.has(key)}`); // <-- Log filtering decision
			const hasKey = votedProposalKeys.has(key);
			// Log individual filtering decision if needed
			// console.log(`Proposal key: ${key}, Voted: ${hasKey}`);
			return hasKey;
		});
		console.log("Filtered proposals:", filtered); // <-- Log the final filtered list
		return filtered;
	}, [proposals, votedProposalKeys, createProposalKey]);

	return (
		<section
			id="proposals"
			className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
		>
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-500 font-didot-title">
				Proposals Voted By DRep{" "}
				{DREP_ID ? `(${DREP_ID.substring(0, 10)}...)` : ""}
			</h2>

			{isLoading && (
				<div className="flex justify-center items-center h-32">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400" />
				</div>
			)}

			{error && (
				<div
					className="text-center bg-red-900/30 border border-red-600 text-red-300 px-4 py-3 rounded relative"
					role="alert"
				>
					<strong className="font-bold">Error:</strong>
					<span className="block sm:inline ml-2">{error}</span>
				</div>
			)}

			{/* Updated message for no voted proposals */}
			{!isLoading && !error && filteredProposals.length === 0 && (
				<p className="text-center text-zinc-400">
					No proposals found that were voted on by this DRep.
				</p>
			)}

			{!isLoading && !error && filteredProposals.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{/* Map over the filtered proposals */}
					{filteredProposals.map((proposal) => {
						const proposalKey = createProposalKey(
							proposal.tx_hash,
							proposal.cert_index,
						);
						// No need for hasVoted check here, as all are voted on
						// Removed the ring and badge logic

						return (
							<div key={proposalKey} className="relative">
								<ProposalCard proposal={proposal} />
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default Proposals;
