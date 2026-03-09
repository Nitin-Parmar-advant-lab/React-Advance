import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
    test("testing greeting", () => {
        // Arrange
        render(<Greeting />);
        //Act
        // ... nothing

        // Assert
        const helloTest = screen.getByText("Hello World", { exact: false });

        expect(helloTest).toBeInTheDocument();
    });

    test("renders good to see you if button was not clicked", () => {
        render(<Greeting />);

        const paragraphElement = screen.getByText("good to see you", {
            exact: false,
        });

        expect(paragraphElement).toBeInTheDocument();
    });

    test("renders Changed! if button was clicked", async () => {
        render(<Greeting />);

        //act
        const btnElement = screen.getByRole('button')
        await userEvent.click(btnElement)

        // assert
        const paragraphElement = screen.getByText("Changed", {
            exact: false,
        });

        expect(paragraphElement).toBeInTheDocument();
    });

    test("does not render good to see you if the btn was clicked", async () => {
        render(<Greeting />);

        //act
        const btnElement = screen.getByRole('button')
        await userEvent.click(btnElement)

        // assert
        const paragraphElement = screen.queryByText("good to see you", {
            exact: false,
        });

        expect(paragraphElement).toBeNull();
    });
});
