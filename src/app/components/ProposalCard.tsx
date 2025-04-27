import type { FC } from "react";

// Define the structure of a proposal based on the expected API response
// Adjust this interface based on the actual data structure from Blockfrost
interface Proposal {
	tx_hash: string;
	cert_index: number;
	// Add other relevant proposal fields here, e.g., title, description, type
	title?: string;
	abstract?: string;
	motivation?: string;
	rationale?: string;
	type?: string; // e.g., 'TreasuryWithdrawals', 'NoConfidence', 'UpdateCommittee', etc.
	// Using unknown is safer than any, but requires type checking before use.
	// If the structure is known for specific types, create more specific interfaces.
	details?: unknown; // Structure depends on proposal type
}

interface ProposalCardProps {
	proposal: Proposal;
}

const ProposalCard: FC<ProposalCardProps> = ({ proposal }) => {
	// const getVoteBadgeClass = (
	// 	vote: "Yes" | "No" | "Abstain" | null | undefined,
	// ): string => {
	// 	switch (vote) {
	// 		case "Yes":
	// 			return "bg-green-600/80 border-green-400 text-green-100";
	// 		case "No":
	// 			return "bg-red-600/80 border-red-400 text-red-100";
	// 		case "Abstain":
	// 			return "bg-gray-600/80 border-gray-400 text-gray-100";
	// 		default:
	// 			return "bg-zinc-700/80 border-zinc-500 text-zinc-300";
	// 	}
	// };

	return (
		<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg p-4 md:p-6 h-full flex flex-col transition-transform duration-300 hover:scale-[1.02]">
			<h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-2 font-didot-title">
				{proposal.title || `Proposal ${proposal.tx_hash.substring(0, 8)}...`}
			</h3>
			{proposal.type && (
				<span className="inline-block bg-purple-600/50 text-purple-100 text-xs font-semibold px-2 py-0.5 rounded mb-3 self-start ">
					{proposal.type}
				</span>
			)}
			{proposal.abstract && (
				<div className="mb-3">
					<h4 className="text-sm font-semibold text-zinc-200 mb-1">Abstract</h4>
					<p className="text-sm text-zinc-300 leading-relaxed line-clamp-3 text-ellipsis">
						{proposal.abstract}
					</p>
				</div>
			)}
			{proposal.motivation && (
				<div className="mb-3">
					<h4 className="text-sm font-semibold text-zinc-200 mb-1 ">
						Motivation
					</h4>
					<p className="text-sm text-zinc-300 leading-relaxed line-clamp-3">
						{proposal.motivation}
					</p>
				</div>
			)}
			{proposal.rationale && (
				<div className="mb-3">
					<h4 className="text-sm font-semibold text-zinc-200 mb-1">
						Rationale
					</h4>
					<p className="text-sm text-zinc-300 leading-relaxed line-clamp-3">
						{proposal.rationale}
					</p>
				</div>
			)}

			{/* Keep Tx Hash and Cert Index, maybe less prominent or at the bottom */}
			<div className="mt-auto pt-3 border-t border-white/10">
				<p className="text-xs text-zinc-400 mb-1">
					Tx Hash:{" "}
					<span className="font-mono break-all">{proposal.tx_hash}</span>
				</p>
				<p className="text-xs text-zinc-400">
					Cert Index: {proposal.cert_index}
				</p>
			</div>
			{/* Consider adding a link to an explorer or more details page */}
		</div>
	);
};

export default ProposalCard;
