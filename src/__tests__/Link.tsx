import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { Test } from "../component/Link";

describe("Test", () => {
  let container: any = null;
  container = document.createElement("div");
  document.body.appendChild(container);

  it("render", () => {
    act(() => {
      render(<Test />, container);
    });
    expect(container.textContent).toBe("No props");
    act(() => {
      render(<Test text="props" />, container);
    });
    expect(container.textContent).toBe("props");
  });
});
