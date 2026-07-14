import { describe, expect, it } from "vitest";
import { fallbackMetrics, percentage } from "./metrics";

describe("metrics formatting", () => {
  it("formats valid percentages used by the dashboard", () => {
    expect(percentage(fallbackMetrics.gpuUtilization)).toBe("87%");
    expect(percentage(0)).toBe("0%");
    expect(percentage(100)).toBe("100%");
  });

  it("rejects values outside the percentage domain", () => {
    expect(() => percentage(-1)).toThrow(RangeError);
    expect(() => percentage(101)).toThrow(RangeError);
    expect(() => percentage(Number.NaN)).toThrow(RangeError);
  });
});
