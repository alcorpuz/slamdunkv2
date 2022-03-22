import React from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
   Nav, 
   NavbarContainer, 
   NavLogo,
   MobileIcon,
   NavMenu,
   NavItem,
   NavLinks,
   NavBtn,
   NavBtnLink
  } from './NavbarElements';


const Navbar = ({ toggle }) => {
  
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo onClick={ toggleHome }>Slam Dunk!</NavLogo>
                  <MobileIcon onClick={ toggle }>
                    <FaBars />
                  </MobileIcon>
                  <NavMenu>
                    <NavItem>
                      <NavLinks
                        to="locations"
                        smooth={ true }
                        duration={ 500 }
                        spy={ true }
                        exact='true'
                        offset={ -80 }
                      >
                        Locations
                      </NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks
                        to="menu"
                        smooth={ true }
                        duration={ 500 }
                        spy={ true }
                        exact='true'
                        offset={ -80 }
                      >
                        Menu
                      </NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks
                        to="services"
                        smooth={ true }
                        duration={ 500 }
                        spy={ true }
                        exact='true'
                        offset={ -80 }
                      >
                        Services
                      </NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks
                        to="story"
                        smooth={ true }
                        duration={ 500 }
                        spy={ true }
                        exact='true'
                        offset={ -80 }
                      >
                        About
                      </NavLinks>
                    </NavItem>
                  </NavMenu>
                  <NavBtn>
                    <NavBtnLink href='https://slamdunkpizza.hungerrush.com/'>Order Online</NavBtnLink>
                  </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;