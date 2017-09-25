import React from 'react';

import { Navigation, NavigationItem,  NavigationLink } from '~/components/navigation';

const MainNavigationItem = ({className, toggle, title, ...props}) => {
    return (
        <NavigationItem className={className}>
            <NavigationLink {...props} onClick={toggle} >{title}</NavigationLink>
        </NavigationItem>
    )
}

export default ({toggle, ...props}) => (<Navigation {...props}>
      <MainNavigationItem toggle={toggle} exact to="/" title="Home"/>
      <MainNavigationItem toggle={toggle} to="/services" title="Services"/>
      <MainNavigationItem toggle={toggle} to="/visas" title="Visas"/>
      <MainNavigationItem toggle={toggle} to="/citizenship/australian-citizenship" title="Citizenship"/>
      <MainNavigationItem toggle={toggle} to="/contact" title="Contact"/>
      <MainNavigationItem toggle={toggle} to="/news" title="News"/>
</Navigation>)
