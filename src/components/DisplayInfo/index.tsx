import { useMapContext } from "../../contexts/map.context";
import data from "../../data";

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

			<div className="grid grid-cols-3 gap-6">
				<div className="prose max-w-none flex flex-col items-center gap-4 [&>*]:m-0">
					<div className="flex flex-col [&>*]:m-0 w-full">
						<h3 className="">أهم الأحداث</h3>
						<ul className="max-h-72 overflow-y-scroll">
							{data[currentYear].events.map(event => (
								<li key={event.title}>{event.title}</li>
							))}
						</ul>
					</div>
				</div>

				<div className="prose max-w-none flex flex-col items-center gap-4 [&>*]:m-0 ">
					<div className="flex flex-col gap-2 [&>*]:m-0 w-full">
						<h3 className="">زوجات الرسول ﷺ</h3>
						<ul className="max-h-72 overflow-y-scroll">
							{data[currentYear].wives.map(wive => (
								<li key={wive.name}>
									<p>إسم الزوجة: {wive.name}</p>
									<p>العمر: {wive.age}</p>
									<p>الأولاد:</p>
									<ul>
										{wive.children.map(child => (
											<li key={child.name}>{child.name}</li>
										))}
									</ul>
									{wive.date_of_death && (
										<p>تاريخ الوفاة: {wive.date_of_death}</p>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="prose max-w-none flex flex-col items-center gap-4 [&>*]:m-0 ">
					<div className="flex flex-col gap-2 [&>*]:m-0 w-full">
						<h3 className="">بعض أسماء الصحابة البارزين</h3>
						<ul className="max-h-72 overflow-y-scroll">
							{data[currentYear].prominent_companions.map(companion => (
								<li key={companion.name}>
									<p>الأسم: {companion.name}</p>
									<p>العمر: {companion.age}</p>
									<p>تاريخ الوفاة: {companion.date_of_death}</p>
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
