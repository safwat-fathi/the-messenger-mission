'use client';

import { Wife } from "../../../types";
import { formatYearsAppendedWord } from "../../utils/format";

type Props = Wife;

const ProphetWivesCard = ({name, age, children, date_of_death}: Props) => {
	
	
	return (
		<div className="prose max-w-none border border-solid rounded-lg p-4 shadow hover:shadow-lg transition-all hover:bg-slate-50 cursor-pointer">
			<h3 className="text-center">{name}</h3>
			<p><span className="font-semibold">العمر:</span> {formatYearsAppendedWord(age)}</p>
			<p><span className="font-semibold">عدد الأبناء:</span> {children.length}</p>
			<div className="flex gap-2">
				{children.map((child) => (
					<span key={child.name} className="font-semibold bg-slate-200 rounded-lg p-2">{child.name}</span>
				))}
			</div>
			<p>تاريخ الوفاة: {date_of_death ? date_of_death : "-"}</p>
		</div>
	)
};

export default ProphetWivesCard;
