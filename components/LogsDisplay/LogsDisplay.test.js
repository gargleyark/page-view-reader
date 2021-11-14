import React from "react";
import { render, screen } from "../../helpers/testUtils";
import LogsDisplay from ".";

describe("Logs display", () => {
    it('should render correctly', () => {
        const { container } = render(<LogsDisplay />);
        expect(container).toMatchSnapshot();
    });
});