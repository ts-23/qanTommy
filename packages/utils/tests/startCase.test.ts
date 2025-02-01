import { startCase } from "../src";
import { describe, it, expect } from "vitest";

describe("given 'BAR'", () => {
  it("should return 'Bar'", () => {
    expect(startCase("BAR")).toBe("Bar");
  });
});

describe("given 'FOO_bAR'", () => {
  it("should return 'Foo Bar'", () => {
    expect(startCase("FOO_bAR")).toBe("Foo Bar");
  });
});

describe("given 'FOO (23)'", () => {
  it("should return 'Foo (23)'", () => {
    expect(startCase("FOO (23)")).toBe("Foo (23)");
  });
});
