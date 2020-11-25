
export default class MathUtils {

    public static clamp(value: number, minValue: number, maxValue: number): number {
        if (isNaN(value)) {
            value = minValue;
        }
        return Math.min(Math.max(value, minValue), maxValue);
    }
}