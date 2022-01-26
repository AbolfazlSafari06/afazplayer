export function timeFormater(time: number | null) {
    if (time) {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    } else {
        return "00:00";
    }
}