import React from 'react';
import withSettings  from '~/enhancers/with-settings';

const map = (settings) => ({
    icons: settings.map(x => x.social)
});

export default withSettings(map);