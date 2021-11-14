import React from "react";
import { render, screen } from "../../helpers/testUtils";
import FileUpload from ".";

describe("File Upload", () => {
    it('should render correctly', () => {
        const { container } = render(<FileUpload />);
        expect(container).toMatchSnapshot();
    });
    it('should render text on page', () => {
        render(<FileUpload />);
        expect(screen.getByText('Upload log file')).toBeInTheDocument();
    });
});