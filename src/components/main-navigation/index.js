import React from 'react';

import { Navigation, NavigationItem,  NavigationLink } from '~/components/navigation';

export default (props) => (<Navigation {...props}>
      <NavigationItem>
          <NavigationLink exact to="/">Home</NavigationLink>
      </NavigationItem>
      <NavigationItem>
          <NavigationLink to="/services">Services</NavigationLink>
      </NavigationItem>
      <NavigationItem>
          <NavigationLink to="/visas">Visas</NavigationLink>
      </NavigationItem>
      <NavigationItem>
          <NavigationLink to="/citizenship">Citizenship</NavigationLink>
      </NavigationItem>
      <NavigationItem>
          <NavigationLink to="/contact">Contact</NavigationLink>
      </NavigationItem>
      <NavigationItem>
          <NavigationLink to="/news">News</NavigationLink>
      </NavigationItem>
</Navigation>)
