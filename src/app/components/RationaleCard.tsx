import budgetRationaleContent from "@/data/budgetRationale";
import MarkdownRenderer from "./MarkdownRenderer";

const RationaleCard = () => {
	return (
		<div className="relative bg-white shadow-lg rounded-lg px-6 py-6 border-2 border-blue-100 w-full mx-auto md:mx-0 md:w-[28rem]">
			<span className="absolute right-4 top-4 bg-blue-500 rounded-lg px-2 py-0.5 text-white font-bold text-xs ">
				Vision
			</span>
			<h2 className="text-xl font-didot-title mb-4 text-blue-500 font-bold font-geist_mono">
				Cardano Budget
			</h2>
			<MarkdownRenderer content={budgetRationaleContent} />
		</div>
	);
};

export default RationaleCard;
