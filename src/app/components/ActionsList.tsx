"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaCheck, FaCopy, FaLink, FaXTwitter } from "react-icons/fa6";

// interface ActionsListProps {
//   contentToCopy: string;
//   websiteUrl: string;
//   xProfileUrl: string;
// }

const ActionsList: React.FC = () => {
	const [copied, setCopied] = useState(false);
	const [copyError, setCopyError] = useState(false);
	const contentToCopy =
		"drep1jcfgptx9j869j9jxrwyvvjldcuz6gjv5wp7g32k3yyq5sukjg87";
	const websiteUrl =
		"https://gov.tools/connected/drep_directory/drep1jcfgptx9j869j9jxrwyvvjldcuz6gjv5wp7g32k3yyq5sukjg87";
	const xProfileUrl = "https://x.com/howlingzac";

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(contentToCopy);
			setCopied(true);
			setCopyError(false);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
			setCopyError(true);
			setTimeout(() => setCopyError(false), 2000);
		}
	};

	return (
		<div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-4 font-geist_sans">
			<a
				href={websiteUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="text-inherit no-underline"
			>
				{/* Adjusted padding, removed shadow */}
				<div className="flex items-center gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-md cursor-pointer transition-all duration-200 hover:bg-blue-100">
					<FaLink className="w-3 h-3 md:w-4 md:h-4" />
					<span className="text-black opacity-75 font-medium text-xs md:text-sm">
						Delegate
					</span>
				</div>
			</a>

			<a
				href={xProfileUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="text-inherit no-underline"
			>
				{/* Adjusted padding, removed shadow */}
				<div className="flex items-center gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-md cursor-pointer transition-all duration-200 hover:bg-blue-100">
					<FaXTwitter className="w-3 h-3 md:w-4 md:h-4" />
					<span className="text-black opacity-75 font-medium text-xs md:text-sm">
						Follow
					</span>{" "}
					{/* Shortened text */}
				</div>
			</a>

			<div
				onMouseDown={handleCopy}
				// Adjusted padding, removed shadow, adjusted text size for header
				className="flex items-center gap-2 px-2 py-1 md:px-3 md:py-1.5 cursor-pointer transition-all duration-200 hover:bg-blue-100 rounded-md relative"
			>
				<FaCopy className="w-3 h-3 md:w-4 md:h-4" />
				<span className="text-black opacity-75 font-medium text-xs md:text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px] md:max-w-[250px]">
					Drep ID: {contentToCopy.substring(0, 10)}...
					{contentToCopy.substring(50)}
				</span>
				{/* Adjusted icon position */}
				{copied && (
					<FaCheck className="absolute -right-3 md:-right-5 text-green-500 animate-fadeIn w-4 h-4" />
				)}
				{copyError && (
					<FaTimes className="absolute -right-3  md:-right-5 text-red-500 animate-fadeIn w-4 h-4" />
				)}
			</div>
		</div>
	);
};

export default ActionsList;
