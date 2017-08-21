import React from 'react'
import styled, {css} from 'styled-components'
import { Toolbar } from '~/components/toolbar';
import { NavLink } from 'rebass';
import  Icon  from "~/components/icon";

const toNavIconLinks = (icons) => icons.map( ({name, url}) => (
        <NavLink key={name} href={url} f={4}><Icon icon={name}></Icon>
    </NavLink>)
)

const HeaderToolbar = ({contactNumber, icons, onMenuClick}) => {
  
    return (
    <Toolbar bg="secondary" color="white">
      <NavLink onClick={ onMenuClick } >
        <Icon icon="menu" f={4}></Icon>
      </NavLink>
      <NavLink ml='auto' href={`tel:${contactNumber}`}>
        <Icon icon="phone" f={2} pr={2}></Icon> {contactNumber}
      </NavLink>
      {toNavIconLinks(icons)}
      </Toolbar>
  )};

  export default HeaderToolbar;
  