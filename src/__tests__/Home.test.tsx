import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../components/home/Home";
import * as constants from "../constants";

afterEach(cleanup);

describe("Test Home component", () => {

  it("should render", () => {
    const view = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(view).toMatchSnapshot();
    expect(screen.getByTestId("homeHeaderText").innerHTML).toEqual(constants.homeHeaderText);
  });
});
