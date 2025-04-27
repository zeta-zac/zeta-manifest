"use client";

import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
	content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
	return (
		<div className="prose prose-sm sm:prose text-sm text-black/80 font-medium space-y-4 leading-6 font-geist_sans">
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	);
};

export default MarkdownRenderer;
