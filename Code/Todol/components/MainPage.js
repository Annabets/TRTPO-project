import React from 'react';
import {Provider, Portal} from 'react-native-paper';
import Header from './Header';

export default function MainPage() {
  return (
    <Provider>
      <Portal>
        <Header showAll={true} />
      </Portal>
    </Provider>
  );
}

