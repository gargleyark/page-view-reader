import React from "react";
import { render, screen } from "../../helpers/testUtils";
import UniquePageViews from "./";

describe("Unique Page Views", () => {
    it('should render correctly', () => {
        const { container } = render(<UniquePageViews />);
        expect(container).toMatchSnapshot();
    });
    it('should render text on page', () => {
        render(<UniquePageViews />);
        expect(screen.getByText('Unique page views')).toBeInTheDocument();
    });
});