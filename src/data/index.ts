import type { Data } from "../../types";

const data: Data = {
	"1": {
		gregorian_year: 610,
		hijri_year: -12,
		events: [
			{
				title: "نزول الوحي لأول مرة على النبي محمد ﷺ في غار حراء",
				location: "غار حراء، مكة المكرمة",
				pin_location: {
					x: 192.72,
					y: 371.32,
				},
				prophet_location: {
					title: "غار حراء، مكة المكرمة",
					pin_location: {
						x: 192.72,
						y: 371.32,
					},
				},
				prophet_present: true,
				event_type: "other",
			},
			{
				title: "إيمان خديجة بنت خويلد برسالة النبي ﷺ",
				location: "منزل النبي، مكة المكرمة",
				pin_location: {
					x: 192.72,
					y: 371.32,
				},
				prophet_location: {
					title: "منزل النبي، مكة المكرمة",
					pin_location: {
						x: 192.72,
						y: 371.32,
					},
				},
				prophet_present: true,
				event_type: "family",
			},
			{
				title: "إسلام علي بن أبي طالب وهو ابن عم النبي ﷺ",
				location: "منزل النبي، مكة المكرمة",
				pin_location: {
					x: 192.72,
					y: 371.32,
				},
				prophet_location: {
					title: "منزل النبي، مكة المكرمة",
					pin_location: {
						x: 192.72,
						y: 371.32,
					},
				},
				prophet_present: true,
				event_type: "family",
			},
			{
				title: "دعوة النبي ﷺ لأبي بكر الصديق إلى الإسلام",
				location: "مكة المكرمة",
				pin_location: {
					x: 192.72,
					y: 371.32,
				},
				prophet_location: {
					title: "مكة المكرمة",
					pin_location: {
						x: 192.72,
						y: 371.32,
					},
				},
				prophet_present: true,
				event_type: "other",
			},
		],
		number_of_muslims: 4,
		prominent_companions: [
			{
				name: "علي بن أبي طالب",
				age: 10,
				date_of_death: "661 م",
			},
			{
				name: "أبو بكر الصديق",
				age: 38,
				date_of_death: "634 م",
			},
		],
		wives: [
			{
				name: "خديجة بنت خويلد",
				age: 55,
				date_of_death: null,
				children: [
					{
						name: "القاسم",
						age: null,
						date_of_death: "قبل 610 م",
					},
					{
						name: "زينب",
						age: 10,
						date_of_death: null,
					},
					{
						name: "رقية",
						age: 9,
						date_of_death: null,
					},
					{
						name: "أم كلثوم",
						age: 7,
						date_of_death: null,
					},
					{
						name: "فاطمة",
						age: 5,
						date_of_death: null,
					},
				],
			},
		],
		concubines: [],
	},
	"2": {
		gregorian_year: 611,
		hijri_year: -11,
		events: [
			{
				title: "بداية الدعوة السرية للإسلام",
				location: "دار الأرقم بن أبي الأرقم، مكة المكرمة",
				pin_location: {
					x: 192.72,
					y: 371.32,
				},
				prophet_location: {
					title: "دار الأرقم بن أبي الأرقم، مكة المكرمة",
					pin_location: {
						x: 192.72,
						y: 371.32,
					},
				},
				prophet_present: true,
				event_type: "other",
			},
			{
				title: "إسلام عدد من الصحابة البارزين",
				location: "مكة المكرمة",
				pin_location: {
					x: 192.72,
					y: 371.32,
				},
				prophet_location: {
					title: "مكة المكرمة",
					pin_location: {
						x: 192.72,
						y: 371.32,
					},
				},
				prophet_present: true,
				event_type: "other",
			},
		],
		number_of_muslims: 40,
		prominent_companions: [
			{
				name: "عثمان بن عفان",
				age: 37,
				date_of_death: "656 م",
			},
			{
				name: "زيد بن حارثة",
				age: 31,
				date_of_death: "629 م",
			},
			{
				name: "سعد بن أبي وقاص",
				age: 21,
				date_of_death: "674 م",
			},
			{
				name: "عبد الرحمن بن عوف",
				age: 31,
				date_of_death: "652 م",
			},
		],
		wives: [
			{
				name: "خديجة بنت خويلد",
				age: 56,
				date_of_death: null,
				children: [
					{
						name: "القاسم",
						age: null,
						date_of_death: "قبل 610 م",
					},
					{
						name: "زينب",
						age: 11,
						date_of_death: null,
					},
					{
						name: "رقية",
						age: 10,
						date_of_death: null,
					},
					{
						name: "أم كلثوم",
						age: 8,
						date_of_death: null,
					},
					{
						name: "فاطمة",
						age: 6,
						date_of_death: null,
					},
					{
						name: "عبد الله",
						age: 0,
						date_of_death: "611 م",
					},
				],
			},
		],
		concubines: [],
	},
} as const;

export default data;
