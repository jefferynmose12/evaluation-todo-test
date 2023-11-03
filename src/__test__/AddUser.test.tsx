import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Users } from "../../src/pages";
import StoreManager from "../context/provider";

const Application = () => {
  return (
    <StoreManager>
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    </StoreManager>
  );
};

describe("add user to users list", () => {
  it("should navigate to another page when the button is clicked", () => {
    render(<Application />);

    const button = screen.getByText("Create a user");
    fireEvent.click(button);
    expect(window.location.pathname).toBe("/form");
  });

  
});
