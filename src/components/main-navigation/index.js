import React from 'react';

import { Navigation, NavigationItem,  NavigationLink } from '~/components/navigation';

export default (props) => (<Navigation>
      <NavigationItem>
          <NavigationLink to="/" onlyActiveOnIndex activeClassName="active">Home</NavigationLink>
      </NavigationItem>
      <NavigationItem>
          <NavigationLink to="/services" activeClassName="active">Services</NavigationLink>
      </NavigationItem>
      <NavigationItem>
          <NavigationLink to="/visas" activeClassName="active">Visas</NavigationLink>
      </NavigationItem>
      <NavigationItem>
          <NavigationLink to="/contact" activeClassName="active">Contact</NavigationLink>
      </NavigationItem>
      <NavigationItem>
          <NavigationLink to="/news" activeClassName="active">News</NavigationLink>
      </NavigationItem>
</Navigation>)
