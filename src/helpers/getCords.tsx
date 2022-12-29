export default function getCords(apiRes: any) {
	let LAT = apiRes["latitude"];
	let LON = apiRes["longitude"];
	if (LAT < 0) {
		LAT = Math.abs(LAT);
		LAT += " S";
	} else {
		LAT += " N";
	}
	if (LON < 0) {
		LON = Math.abs(LAT);
		LON += " W";
	} else {
		LON += " E";
	}
	return [LAT, LON];
}
