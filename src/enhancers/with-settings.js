import React from 'react';
import settings  from '~/app/settings.json';
import { withProps, compose } from 'recompose';
import { Maybe } from 'ramda-fantasy';

const withSettings = (map = x => ({ settings: x })) => {
    return  compose(
        withProps(map(Maybe.of(settings)))
    );
}


export default withSettings;