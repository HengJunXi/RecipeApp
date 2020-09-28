import React from 'react';
import {useHistory} from 'react-router-native';

import colors from '../constants/colors';
import IconButton from './IconButton';

export default function BackIconButton({text, to}) {
  const history = useHistory();
  return (
    <IconButton
      text={text}
      iconWidth={12}
      tintColor={colors.primary}
      imgSrc={require('../assets/icons/backArrow.png')}
      // to={to}
      // replace={true}
      onPress={() => history.goBack()}
    />
  );
}
