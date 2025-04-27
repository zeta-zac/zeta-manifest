// --- Interfaces ---

// Interface for a DRep list item from /governance/dreps
export interface DRepListItem {
	drep_id: string; // bech32 encoded DRep ID
	// Add other fields if the list endpoint provides more, e.g., registration tx hash
}

// Interface for DRep details/metadata from /governance/dreps/{drep_id}
export interface DRepDetails {
	tx_hash: string;
	cert_index: number;
	drep_id: string; // bech32 encoded DRep ID
	anchor_url: string | null;
	anchor_hash: string | null;
	// Add other fields as needed based on the API response
}

// Interface for DRep votes (can potentially share with useProposals if identical)
export interface DRepVote {
	tx_hash: string;
	cert_index: number;
	action: "yes" | "no" | "abstain";
	// Add other relevant vote fields if needed
}
