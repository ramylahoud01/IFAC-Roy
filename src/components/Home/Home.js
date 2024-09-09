import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, List, ListItem, ListItemText, Link as MuiLink, Box, Button } from '@mui/material';
import { Link } from 'react-scroll';
import { styled } from '@mui/system';
import EastIcon from '@mui/icons-material/East';
import Image from "../../image/image.png"

const StyledLink = styled(Link)({
  cursor: 'pointer',
  color: 'inherit',
  textDecoration: 'none',
});

const Section = ({ id, title, children }) => (
  <Card sx={{ marginBottom: 4 ,borderRadius:'10px'}}>
    <CardContent>
      <Typography variant="h4" component="h1" gutterBottom id={id} style={{fontWeight:'bold',color:'#004953'}}>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

const Home = () => {
  const sections = [
    { id: 'about', title: 'About IFAC' },
    { id: 'people', title: 'People' },
    { id: 'news', title: 'News' },
    { id: 'calendar', title: 'Calendar' },
    { id: 'gallery', title: 'Gallery' },
    { id: 'contact', title: 'Contact Info' },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://www.ifac-control.org/structure/associated-member-organizations-amos', '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{padding:'20px 150px', background: 'linear-gradient(135deg, #f5f7fa 0%, #F0F8FF 100%)',}}>
      <Box sx={{position:"sticky",padding:'20px 0px'}} >
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>
            <a href='https://www.ifac-control.org/'><img src={Image} width={180} height={90} /></a>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          {sections.map((section) => (
            <StyledLink
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-64} 
            >
              <Typography variant="button" sx={{ marginRight: 2, fontSize:'20px' ,color:'#004953', fontWeight:'bold', '&:hover': {color:'#8F9779'},}}>
                {section.title}
              </Typography>
            </StyledLink>
          ))}
          </div>
          </div>
      </Box>
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Section id="about" title="About IFAC AMOs">
        <Typography
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor:'pointer',
            }}
    >
      <Typography  sx={{ mr: 1,  fontSize:'20px', textDecoration: isHovered ? 'underline' : 'none',color:isHovered ? '#B784A7' :'#8F9779'}}>
        IFAC AMOs
      </Typography>
      <EastIcon
        sx={{
        fontSize:'30px',
          transition: 'transform 0.3s ease-in-out',
          transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
        }}
      />
    </Typography>
        </Section>
        <Section id="people" title="People">
          <List>
            {['Dany Abou Jaoude (AUB)', 'Roy ABI ZEID DAOU (ULS)', 'Naseem Daher (AUB)', 'Noel Maalouf (LAU)', 'Bechara Nehme (USEK)', 'Michel Owayjan (AUST)', 'Flavia Khatounian Rajji (USJ)', 'Jean Sawma (USJ)'].map((person, index) => (
              <ListItem key={index} >
               <ListItemText
        primary={person}
         primaryTypographyProps={{ fontSize: '20px',color:'#494F55' }}
      />
              </ListItem>
            ))}
          </List>
        </Section>

        <Section id="news" title="News">
          <Typography>Placeholder for news and announcements</Typography>
        </Section>

        <Section id="calendar" title="Calendar">
          <Typography>Placeholder for events and activities calendar</Typography>
        </Section>

        <Section id="gallery" title="Gallery">
          <Typography>Placeholder for event pictures</Typography>
        </Section>

        <Section id="contact" title="Contact Info">
          <Typography variant="body1" paragraph>
            <strong>Postal mailing address:</strong> P.O. Box 11-0236, Riad El Solh Street, Beirut, Lebanon – postal code: 1107 2020
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Telephone number:</strong> +961 1 35 00 00 – Ext. 3542
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Fax:</strong> +961 1 74 44 62
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> [IFAC alias placeholder]
          </Typography>
        </Section>
      </Container>
    </div>
  );
};

export default Home;
