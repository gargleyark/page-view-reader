import React from "react";
import { render, screen } from "../../helpers/testUtils";
import AllPageViews from ".";

describe("All Page Views", () => {
    it('should render correctly', () => {
        const { container } = render(<AllPageViews />);
        expect(container).toMatchSnapshot();
    });
    it('should render text on page', () => {
        render(<AllPageViews />);
        expect(screen.getByText('All page views')).toBeInTheDocument();
    });
});