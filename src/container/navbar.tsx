import { useState } from "react";
import { Link } from "react-scroll";
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
      index: "00."
    },
    {
      name: "Portfólio",
      index: "01."
    },
    {
      name: "Vamos Conversar?",
      index: "02."
    }
  ];

  const desktopItems = [
    {
      name: "Home",
      icon: null
    },
    {
      name: "Portfólio",
      icon: null
    },
    {
      name: "Vamos Conversar?",
      icon: null
    },
    {
      name: "+55 11 9 5199 1612",
      icon: <RiPhoneLine />
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
                      <Link
                        to={item.name}
                        key={item.name}
                        {...settings}
                        style={{ fontSize: "1.4rem" }}
                      >
                        <NavLinks.DesktopItem
                          handleHoverStart={() => setHovered(item.name)}
                          handleHoverEnd={() => setHovered("")}
                          handleClick={toggleMenu}
                        >
                          {isHovered && <NavLinks.Hovered />}

                          {item.icon ? (
                            <>
                              <span>{item.icon}</span>
                              <strong>{item.name}</strong>
                            </>
                          ) : (
                            item.name
                          )}
                        </NavLinks.DesktopItem>
                      </Link>
                    );
                  })}
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

            <NavLinks>
              <NavLinks.MobileContainer>
                {mobileItems.map((item) => {
                  const isHovered = hovered === item.name;
                  return (
                    <Link to={item.name} key={item.index} {...settings}>
                      <NavLinks.MobileItem
                        index={item.index}
                        handleHoverStart={() => setHovered(item.name)}
                        handleHoverEnd={() => setHovered("")}
                        handleClick={toggleMenu}
                      >
                        {isHovered && <NavLinks.Hovered />}

                        {item.name}
                      </NavLinks.MobileItem>
                    </Link>
                  );
                })}
              </NavLinks.MobileContainer>
            </NavLinks>
          </Menu.Content>
        </Base.Container>
      </Menu>
    </>
  );
}
