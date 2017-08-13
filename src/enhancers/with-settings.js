import settings  from '~/app/settings.json';
import { withProps } from 'recompose';
import { Maybe } from 'ramda-fantasy';

const enhance = withProps({
    settings: Maybe.of(settings)
});

export default enhance;