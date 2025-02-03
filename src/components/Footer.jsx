import { Facebook, Instagram, X } from '@mui/icons-material';
import styled from 'styled-components';

const FooterContainer = styled.footer` 
  background-color: black;
  color: #fff;
  padding: 40px 80px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const SectionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SectionListItem = styled.li`
  margin-bottom: 8px;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin-right: 15px;
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4081;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>Categories</SectionTitle>
          <SectionList>
            <SectionListItem>Men's Fashion</SectionListItem>
            <SectionListItem>Women's Fashion</SectionListItem>
            <SectionListItem>Kids' Clothing</SectionListItem>
            <SectionListItem>Accessories</SectionListItem>
          </SectionList>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Customer Service</SectionTitle>
          <SectionList>
            <SectionListItem>Contact Us</SectionListItem>
            <SectionListItem>Shipping Information</SectionListItem>
            <SectionListItem>Returns & Exchanges</SectionListItem>
            <SectionListItem>Size Guide</SectionListItem>
          </SectionList>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialMediaContainer>
            <SocialMediaIcon href="#" target="_blank">
              <Facebook />
            </SocialMediaIcon>
            <SocialMediaIcon href="#" target="_blank">
              <X/>
            </SocialMediaIcon>
            <SocialMediaIcon href="#" target="_blank">
              <Instagram/>
            </SocialMediaIcon>
          </SocialMediaContainer>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
