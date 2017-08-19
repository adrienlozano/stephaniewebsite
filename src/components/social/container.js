import React from 'react';
import  withSettings  from '~/enhancers/with-settings';

const IconsContainer = ({settings, component : Component}) => (<Component icons={ settings.map(x => x.social) }></Component>)
export default withSettings()(IconsContainer);