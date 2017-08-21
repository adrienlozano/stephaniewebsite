import React from 'react'
import styled, {css} from 'styled-components'
import { Grid, Flex, Box } from 'rebass';
import Navigation from '~/components/navigation';
import withSettings from "~/enhancers/with-settings";
import Logo from './logo';
import PageSection from '~/components/page-section';
import MainNavigation from '~/components/main-navigation';
import { compose, mapProps, withState, withHandlers } from 'recompose';
import HeaderToolbar from './toolbar';

const hideMenu = (breakpoint) => css`
  @media (max-width: ${breakpoint}em){
    transform: ${ ({open}) =>  open ? "translateX(0px)" : "translateX(-150%)" };
    transition: all 0.3s ease-in-out;
    position:absolute;
    top: 3em;
    z-index:10;
  }
`;

const MenuPageSection = styled(PageSection)`
  ${ ({theme}) => hideMenu(theme.breakpoints[2]) };
  width:100%;
  background-color: #FFF;
`

const Header = ({className, contactNumber, icons, toggleMenu, menuOpen}) => {
  return (
     <Flex className={className} column={true} >
       <PageSection bg="secondary" py={0}>
         <HeaderToolbar contactNumber={contactNumber} icons={icons} onMenuClick={toggleMenu}/>
       </PageSection>
       <PageSection bg="primary" py={0}>
         <Logo/>
       </PageSection>
       <MenuPageSection bg="white" py={0} open={menuOpen}>
        <MainNavigation open={menuOpen}/>
      </MenuPageSection>
    </Flex>
  )
}

const StyledHeader = styled(Header)`
  background-color: ${ ({backgroundColor, theme}) => backgroundColor ? backgroundColor : theme.colors.dark }
`;

const withContactNumber = withSettings(settings => 
  ( { contactNumber: settings.map(x => x.general).map(x => x.contactNumber).getOrElse(null) })
);

const withSocial = withSettings(settings => 
  ( { icons: settings.map(x => x.social).getOrElse([]) })
);

const enhance = compose(
  withContactNumber,
  withSocial,
  withState('menuOpen', 'setMenuOpen', false),
  withHandlers({
    toggleMenu: ({ setMenuOpen, menuOpen }) => (e) =>  setMenuOpen(!menuOpen)
  })
)

export default enhance(StyledHeader);