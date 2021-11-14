import React from "react";
import { render, screen } from "../../helpers/testUtils";
import PageViewData from ".";

describe("Pageview data", () => {
    it('should render correctly', () => {
        const { container } = render(<PageViewData path="/index" count={4} label="page views" />);
        expect(container).toMatchSnapshot();
    });
    it('should render text on page', () => {
        render(<PageViewData path="/index" count={4} label="page views" />);
        expect(screen.getByText('4 page views')).toBeInTheDocument();
        expect(screen.getByText('/index')).toBeInTheDocument();
    });
});