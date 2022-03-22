import React from 'react'
import SDLogo from '../../images/logo.jpg'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaSnapchat, FaTiktok } from 'react-icons/fa'
import { FooterContainer,
        FooterWrapper,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinkItems,
        FooterLinkTitle,
        FooterLink,
        SocialMedia,
        SocialMediaWrapper,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink,
        MainLogo
 } from './FootElements'    

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }
    


  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/our-story">Our Story</FooterLink>
                        <FooterLink to="/contact-us">Contact Us</FooterLink>
                        <FooterLink to="/menu">The Menu</FooterLink>
                        <FooterLink to="/careers">Join the Team!</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Locations</FooterLinkTitle>
                        <FooterLink to="/redwood-valley">Redwood Valley</FooterLink>
                        <FooterLink to="/ukiah">Ukiah</FooterLink>
                        <FooterLink to="/willits">Willits</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Services</FooterLinkTitle>
                        <FooterLink to="/arcade">Arcade</FooterLink>
                        <FooterLink to="/event-hosting">Let us Host your Event</FooterLink>
                        <FooterLink to="/catering">Catering</FooterLink>
                        <FooterLink to="/donations">Donation Requests</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">TikTok</FooterLink>
                        <FooterLink to="/">Snapchat</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo onClick={ toggleHome }>
                        <MainLogo src={ SDLogo } alt="Logo"/>
                    </SocialLogo>
                    <WebsiteRights>Slam Dunk Pizza © {new Date().getFullYear()} </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/slamdunkpizza' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/slamdunkpizza/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.tiktok.com/@slamdunkpizza?lang=en' target="_blank" aria-label="TikTok">
                            <FaTiktok />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.snapchat.com/slamdunkpizza' target="_blank" aria-label="Snapchat">
                            <FaSnapchat />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer