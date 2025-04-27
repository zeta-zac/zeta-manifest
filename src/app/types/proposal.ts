// Interface for the initial proposal list item
export interface ProposalListItem {
	tx_hash: string;
	cert_index: number;
}

// Interface for the detailed proposal metadata (specifically the body)
export interface ProposalMetadataBody {
	title?: string;
	abstract?: string;
	motivation?: string;
	rationale?: string;
	type?: string; // Assuming type might be in metadata or fetched separately if needed
}

// Interface for the response from the metadata endpoint
export interface ProposalMetadataResponse {
	tx_hash: string;
	cert_index: number;
	url?: string;
	hash?: string;
	json_metadata?: {
		body?: ProposalMetadataBody;
	};
	bytes?: string | null;
}

// Interface for a single vote on a proposal
export interface Vote {
	drep_id: string; // The DRep ID (Bech32 encoded)
	vote: "Yes" | "No" | "Abstain";
	// Potentially other fields like epoch, tx_hash of the vote, etc.
	// Add them here if needed based on the actual API response.
}

// Combined interface for the proposal data used in the component state
export interface Proposal extends ProposalListItem, ProposalMetadataBody {}
