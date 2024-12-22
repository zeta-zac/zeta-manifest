"use client";
import { FaCopy, FaLink, FaXTwitter, FaCheck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

// interface ActionsListProps {
//   contentToCopy: string;
//   websiteUrl: string;
//   xProfileUrl: string;
// }

const ActionsList: React.FC = ({}) => {
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
    <div className="flex flex-col gap-4 w-fit font-geist_sans">
      <div
        onClick={handleCopy}
        className="flex items-center gap-4 px-3 py-3 md:px-6   cursor-pointer transition-all duration-200 hover:bg-blue-50 rounded-lg shadow-lg relative"
      >
        <FaCopy className="w-5 h-5" />
        <span className="text-black opacity-75 font-medium text-xs md:text-sm overflow-clip text-ellipsis max-w-[80vw]">
          Drep ID: {contentToCopy}
        </span>
        {copied && (
          <FaCheck className="absolute -right-10 text-green-500 animate-fadeIn w-5 h-5" />
        )}
        {copyError && (
          <FaTimes className="absolute -right-10 text-red-500 animate-fadeIn w-5 h-5" />
        )}
      </div>

      <a
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-inherit no-underline"
      >
        <div className="flex items-center gap-4 px-3 py-3 md:px-6  rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-50 shadow-lg">
          <FaLink className="w-5 h-5" />
          <span className="text-black opacity-75 font-medium">Delegate</span>
        </div>
      </a>

      <a
        href={xProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-inherit no-underline"
      >
        <div className="flex items-center gap-4 px-3 py-3 md:px-6  shadow-lg rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-50">
          <FaXTwitter className="w-5 h-5" />
          <span className="text-black opacity-75 font-medium">Follow on X</span>
        </div>
      </a>
    </div>
  );
};

export default ActionsList;
