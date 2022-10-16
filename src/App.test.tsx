import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders launch map", async () => {
  render(<App />);
  const linkElement = await screen.findByText(/launch map/i);
  expect(linkElement).toBeInTheDocument();
});
