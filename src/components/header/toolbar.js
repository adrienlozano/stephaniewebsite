import React from 'react'
import styled, {css} from 'styled-components'
import { Toolbar } from '~/components/toolbar';
import { NavLink } from 'rebass';
import { responsiveStyle } from "styled-system";
import  Icon  from "~/components/icon";

const MenuNavLink = styled(NavLink)`
  ${responsiveStyle('display', 'display')};
`

const toNavIconLinks = (icons) => icons.map( ({name, url}) => (
        <MenuNavLink key={name} href={url} f={4}><Icon icon={name}></Icon>
    </MenuNavLink>)
)

const HeaderToolbar = ({contactNumber, icons, onMenuClick}) => {

    return (
    <Toolbar bg="secondary" color="white">
      <MenuNavLink onClick={ onMenuClick } display={['inline-flex', 'inline-flex', 'none']}>
        <Icon icon="menu" f={4}></Icon>
      </MenuNavLink>
      <MenuNavLink ml='auto' href={`tel:${contactNumber}`}>
        <Icon icon="phone" f={2} pr={2}></Icon> {contactNumber}
      </MenuNavLink>
      {toNavIconLinks(icons)}
      </Toolbar>
  )};

  export default HeaderToolbar;
  