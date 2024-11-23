import { useMapContext } from "../../contexts/map.context";
import data from "../../../_data";
import ProphetWivesCard from "../ProphetWivesCard";
import { formatYearsAppendedWord } from "../../utils/format";

const DisplayInfo = () => {
	const { currentYear } = useMapContext();
	console.log("🚀 ~ DisplayInfo ~ currentYear:", currentYear);

	function formatHijriYear(year: number): string {
		if (year < 0) {
			return `قبل الهجرة بـ ${Math.abs(year)} عاما`;
		} else {
			return `${year} هـ`;
		}
	}

	


	return (
		<div className="w-full flex flex-col gap-10">
			<div className="prose max-w-none flex flex-col items-center gap-4 [&>*]:m-0">
				<h1>العام</h1>
				<h2>هجري: {formatHijriYear(data[currentYear].hijri_year)}</h2>
				<h2>ميلادي: {data[currentYear].gregorian_year}</h2>
				<h2>عدد المسلمين بالتقريب: {data[currentYear].number_of_muslims}</h2>
			</div>

			<div className="flex flex-col gap-6">
				<div className="prose max-w-none flex flex-col items-center gap-4 [&>*]:m-0">
					<div className="flex flex-col [&>*]:m-0 w-full">
						<h3 className="">أهم الأحداث</h3>
						<ul className="list-none overflow-y-scroll p-0 m-0">
							{data[currentYear].events.map(event => (
								<li key={event.title} className="py-2 px-4 rounded hover:bg-slate-300 transition-all cursor-pointer bg-slate-100">{event.title}</li>
							))}
						</ul>
					</div>
				</div>

				<div className="prose max-w-none flex flex-col items-center gap-4 [&>*]:m-0 ">
					<div className="flex flex-col gap-2 [&>*]:m-0 w-full">
						<h2 className="">زوجات الرسول ﷺ</h2>
						<div className="">
							{data[currentYear].wives.map(wive => (
								// <>
								// 	<li key={wive.name}>
								// 		<p>إسم الزوجة: {wive.name}</p>
								// 		<p>العمر: {wive.age}</p>
								// 		<p>الأولاد:</p>
								// 		<ul>
								// 			{wive.children.map(child => (
								// 				<li key={child.name}>
								// 					<p>{child.name}</p>
								// 					{Boolean(child.age) && <p>العمر: {formatYearsAppendedWord(child.age as number)}</p>}
								// 					{Boolean(child.date_of_death.hijri_year ) && <p>تاريخ الوفاة: {formatHijriYear(child.date_of_death.hijri_year as number)} - {Boolean(child.date_of_death.gregorian_year ) && <> {child.date_of_death.gregorian_year} م</>}</p>}
													
								// 				</li>

								// 			))}
								// 		</ul>
								// 		{wive.date_of_death && (
								// 			<p>تاريخ الوفاة: {wive.date_of_death}</p>
								// 		)}
								// 	</li>
								// 	<hr />
								// </>
								<ProphetWivesCard key={wive.name} {...wive} />
								
							))}
						</div>
					</div>
				</div>

				<div className="prose max-w-none flex flex-col items-center gap-4 [&>*]:m-0 ">
					<div className="flex flex-col gap-2 [&>*]:m-0 w-full">
						<h2 className="">بعض أسماء الصحابة البارزين</h2>
						<ul className="max-h-72 overflow-y-scroll">
							{data[currentYear].prominent_companions.map(companion => (
								<li key={companion.name}>
									<p><span className="font-bold">الأسم</span>: {companion.name}</p>
									<p><span className="font-bold">العمر</span>: {formatYearsAppendedWord(companion.age)}</p>
									<p><span className="font-bold">تاريخ الوفاة</span>: {companion.date_of_death.hijri_year} هـ - {companion.date_of_death.gregorian_year} م</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DisplayInfo;
