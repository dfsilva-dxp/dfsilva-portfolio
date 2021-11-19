import { render, screen } from "@testing-library/react";

import Main from ".";

describe("<Main />", () => {
  it("should render the heading", () => {
    const { container } = render(
      <Main
        title="Boilerplate"
        description="TypeScript, React, NextJS e Styled Componets"
      />
    );

    expect(
      screen.getByRole("heading", { name: /Boilerplate/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the color correctly", () => {
    const { container } = render(
      <Main
        title="Boilerplate"
        description="TypeScript, React, NextJS e Styled Componets"
      />
    );

    expect(container.firstChild).toHaveStyle({ background: "#06092b" });
  });
});
