import { useState } from "react";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import { RiPhoneLine } from "react-icons/ri";

import { useMenu } from "hooks/useMenu";

import { settings } from "utils/react-scroll-settings";

import { Base, Burguer, Logo, Menu, Navbar, NavLinks } from "components";

export default function NavbarContainer() {
  const [hovered, setHovered] = useState("");

  const { isActive, toggleMenu } = useMenu();

  const mobileItems = [
    {
      name: "Home",
      index: "00.",
      to: "home"
    },
    {
      name: "Portfólio",
      index: "01.",
      to: "works"
    },
    {
      name: "Vamos Conversar?",
      index: "02.",
      to: "contact-us"
    }
  ];

  const desktopItems = [
    {
      name: "Home",
      to: "home"
    },
    {
      name: "Portfólio",
      to: "works"
    },
    {
      name: "Vamos Conversar?",
      to: "contact-us"
    }
  ];

  return (
    <>
      <Navbar>
        <Base.Container>
          <Navbar.Grid>
            <Logo />

            <Burguer>
              <Burguer.Button isActive={isActive} onClick={toggleMenu}>
                <Burguer.Content />
              </Burguer.Button>
            </Burguer>

            <Menu.Desktop>
              <NavLinks>
                <NavLinks.DesktopContainer>
                  {desktopItems.map((item) => {
                    const isHovered = hovered === item.name;
                    return (
                      <ReactScrollLink
                        to={item.to}
                        key={item.name}
                        {...settings}
                      >
                        <NavLinks.DesktopItem
                          handleHoverStart={() => setHovered(item.name)}
                          handleHoverEnd={() => setHovered("")}
                          handleClick={toggleMenu}
                        >
                          {isHovered && <NavLinks.Hovered />}

                          {item.name}
                        </NavLinks.DesktopItem>
                      </ReactScrollLink>
                    );
                  })}

                  <Link href="https://contate.me/dfsilva.dev" passHref>
                    <a target="_blank" rel="noopener">
                      <RiPhoneLine title="Phone Icon" />
                      <strong>+55 11 9 5199 1612</strong>
                    </a>
                  </Link>
                </NavLinks.DesktopContainer>
              </NavLinks>
            </Menu.Desktop>
          </Navbar.Grid>
        </Base.Container>
      </Navbar>

      <Menu isActive={isActive}>
        <Menu.Background />
        <Menu.Overlay />

        <Base.Container>
          <Menu.Content>
            <Base.Grid />

            <NavLinks.MobileContainer>
              {mobileItems.map((item) => {
                const isHovered = hovered === item.name;
                return (
                  <ReactScrollLink to={item.to} key={item.index} {...settings}>
                    <NavLinks.MobileItem
                      index={item.index}
                      handleHoverStart={() => setHovered(item.name)}
                      handleHoverEnd={() => setHovered("")}
                      handleClick={toggleMenu}
                    >
                      {isHovered && <NavLinks.Hovered />}

                      {item.name}
                    </NavLinks.MobileItem>
                  </ReactScrollLink>
                );
              })}
              <Link href="https://contate.me/dfsilva.dev" passHref>
                <a target="_blank" rel="noopener">
                  <RiPhoneLine />
                  <strong>+55 11 9 5199 1612</strong>
                </a>
              </Link>
            </NavLinks.MobileContainer>
          </Menu.Content>
        </Base.Container>
      </Menu>
    </>
  );
}
