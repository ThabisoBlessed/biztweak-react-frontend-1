import { act, cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import * as constants from "../constants";

let container: any;
let view: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  cleanup;
});


describe("Test Navbar component", () => {

  it("should render", () => {
    act(() => {
      view = render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      )
    });

      expect(view).toMatchSnapshot();
      expect(screen.getByTestId("test").innerHTML).toContain(constants.homeHeaderText);
      expect(screen.getByTestId("test")).toBeTruthy();
  });
});
