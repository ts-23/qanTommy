import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PrimaryShellLayout } from "../src/layouts";

// using toMatchSnapshot to save assessment time. We can cover more test cases and go into as much detail as we want in actual app.
describe("PrimaryShellLayout", () => {
  it("renders with logoUrl", () => {
    const actual = render(<PrimaryShellLayout logoUrl="example.com" />);
    expect(actual.baseElement).toMatchSnapshot();
  });

  it("renders without logoUrl", () => {
    const actual = render(<PrimaryShellLayout />);
    expect(actual.baseElement).toMatchSnapshot();
  });

  it("renders with children", () => {
    const actual = render(
      <PrimaryShellLayout>
        <div>foobar</div>
      </PrimaryShellLayout>
    );
    expect(actual.baseElement).toMatchSnapshot();
  });
});
