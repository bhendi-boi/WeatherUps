import { WiSunrise,WiSunset } from "react-icons/wi";
import { getTime } from "../helpers/getTime";
import { isNight } from "../helpers/isNight";
import { APIRES } from "../types";

const SunriseSunset = ({ apiRes }: { apiRes: APIRES }) => {
    return (
        <div className="flex h-28 md:h-40 my-8 md:max-w-lg md:mx-auto gap-4 md:gap-10">
            <div className="flex-1 text-center bg-white rounded-lg">
                <WiSunrise className="w-full h-2/3 md:h-4/5 text-amber-600" />
                <p className="text-black font-title font-bold">
                    {getTime(apiRes["daily"]["sunrise"][0])}
                </p>
            </div>
            <div className="flex-1 text-center bg-white rounded-lg">
                <WiSunset className="w-full h-2/3 md:h-4/5 text-amber-400" />
                <p className="text-black font-title font-bold">
                    {getTime(apiRes["daily"]["sunset"][0])}
                </p>
            </div>
        </div>
    )
}

export default SunriseSunset