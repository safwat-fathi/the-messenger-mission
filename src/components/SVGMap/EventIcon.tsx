import { ComponentProps } from "react";

type Props = ComponentProps<"g"> & {
	badgeCount: number;
};

const EventIcon = ({ badgeCount, ...props }: Props) => {
	return (
		<g {...props}>
			<path
				style={{ fill: "#1b8e5a" }}
				d="m418.457 181.47.053.031c.158.096.318.191.477.285 2.508 1.441 13.199 6.686 13.199-8.563V40.88c0-10.857-6.84-16.603-7.223-16.916-16.018-11.795-58.015-33.09-119.126 6.164-79.235 50.896-130.631 0-130.631 0v161.82s51.396 50.896 130.631 0c54.121-34.762 93.249-22.037 112.62-10.478z"
			/>
			<path
				style={{ fill: "#547a13" }}
				d="M201.206 45.967c-16.729-6.663-26-15.838-26-15.838v161.82s9.271 9.175 26 15.838V45.967z"
			/>
			<path
				style={{ fill: "#31a372" }}
				d="M424.963 23.964c-16.018-11.795-58.015-33.09-119.126 6.164-16 10.277-30.862 16.4-44.398 19.633 4.477 53.55 35.36 99.592 79.599 125.052 36.018-11.779 62.545-2.219 77.42 6.658v-.002l.053.031c.158.096.318.191.477.285 2.508 1.441 13.199 6.686 13.199-8.563V40.88c-.001-10.858-6.841-16.604-7.224-16.916z"
			/>
			<path
				style={{ fill: "#965123" }}
				d="M176.206 447.895V21.399c0-7.674-6.221-13.893-13.893-13.893-7.672 0-13.893 6.219-13.893 13.893v426.495h27.786v.001z"
			/>
			<path
				style={{ fill: "#723514" }}
				d="M169.26 9.38c-9.267-5.364-20.839 1.355-20.839 12.02v426.495h13.893V21.399c-.001-5.139 2.797-9.616 6.946-12.019z"
			/>
			<path
				style={{ fill: "#757575" }}
				d="M229.314 482.173v-24.277c0-6.627-5.373-12-12-12H107.312c-6.627 0-12 5.373-12 12v24.277h134.002z"
			/>
			<path
				style={{ fill: "#515151" }}
				d="M132.313 445.895h-25c-6.627 0-12 5.373-12 12v24.277h25v-24.277c-.001-6.627 5.373-12 12-12z"
			/>
			<path
				style={{ fill: "#5a5b5a" }}
				d="M244.814 492.839c0 6.443-5.223 11.668-11.666 11.668H91.479c-6.443 0-11.666-5.225-11.666-11.668 0-6.441 5.223-11.666 11.666-11.666h141.67c6.443 0 11.665 5.225 11.665 11.666z"
			/>
			<path
				style={{ fill: "#454545" }}
				d="M113.812 492.839c0-6.441 5.223-11.666 11.666-11.666h-34c-6.443 0-11.666 5.225-11.666 11.666 0 6.443 5.223 11.668 11.666 11.668h34c-6.443 0-11.666-5.225-11.666-11.668z"
			/>
			<path d="M429.91 17.918c-6.625-4.879-17.636-11.464-32.467-15.131a7.501 7.501 0 0 0-3.599 14.562c12.265 3.031 21.383 8.42 26.936 12.475.683.63 4.405 4.371 4.405 11.049 0 141.176.102 133.491-.22 135.203-5.642-1.929-51.032-36.465-122.683 9.555-30.704 19.722-60.394 25.901-88.24 18.369-15.698-4.246-26.443-11.902-30.836-15.466V45.04c39.995 24.639 86.544 17.495 127.185-8.608 20.61-13.24 40.717-20.416 59.76-21.331a7.5 7.5 0 0 0 7.132-7.851c-.198-4.138-3.7-7.306-7.85-7.132-21.703 1.043-44.296 9.015-67.149 23.693-30.704 19.723-60.394 25.902-88.24 18.369-15.702-4.247-26.445-11.903-30.836-15.466v-5.321C183.206 9.597 173.609 0 161.813 0s-21.392 9.597-21.392 21.393v416.995h-33.607c-10.752 0-19.5 8.748-19.5 19.5v16.138c-8.819 1.716-15.5 9.491-15.5 18.805 0 10.569 8.598 19.168 19.166 19.168h141.67c10.568 0 19.166-8.599 19.166-19.168 0-9.314-6.681-17.089-15.5-18.805v-16.138c0-10.752-8.748-19.5-19.5-19.5h-33.607V267.377c0-4.143-3.357-7.5-7.5-7.5a7.499 7.499 0 0 0-7.5 7.5v171.011h-12.786V21.393A6.401 6.401 0 0 1 161.816 15a6.4 6.4 0 0 1 6.393 6.393v218.992c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-33.528c40.265 24.819 86.858 17.298 127.184-8.604 33.441-21.479 71.508-30.142 105.359-9.971 6.147 3.535 12.368 4.003 17.062 1.286 4.894-2.831 7.375-8.333 7.375-16.351V40.873c-.003-11.179-6.002-19.8-10.279-22.955zm-213.096 435.47c2.481 0 4.5 2.019 4.5 4.5v15.777h-9.537c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h20.871a4.17 4.17 0 0 1 4.166 4.166 4.172 4.172 0 0 1-4.166 4.168H90.978a4.172 4.172 0 0 1-4.166-4.168 4.17 4.17 0 0 1 4.166-4.166h94.129c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-82.795v-15.777c0-2.481 2.019-4.5 4.5-4.5h110.002z" />

			{badgeCount > 1 && (
				<text
					x="6"
					y="-6"
					className="text-white text-xs font-bold"
					style={{
						backgroundColor: "red",
						borderRadius: "50%",
						padding: "2px",
					}}
				>
					{badgeCount}
				</text>
			)}
		</g>
	);
};

export default EventIcon;