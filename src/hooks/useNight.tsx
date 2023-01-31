import { isNight } from "../helpers/isNight";
import { useState } from "react";

export default function useNight() {
	const [night, setNight] = useState(isNight());
	return night;
}
