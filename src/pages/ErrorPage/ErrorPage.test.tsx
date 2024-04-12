import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorPage from "./ErrorPage";
import { customRender } from "../../utils/testUtils";

describe("ErrorPage", () => {
  it("should render the button"),
    () => {
      customRender(<ErrorPage />);
      const homeButton = screen.getByText("Home");
      expect(homeButton).toBeInTheDocument();
    };

  it("should redirect to /home when 'home' button is clicked", async () => {
    const { getByText } = customRender(<ErrorPage />);
    const home = getByText("Home");
    await userEvent.click(home);
    expect(window.location.pathname).toEqual("/home");
  });
});
