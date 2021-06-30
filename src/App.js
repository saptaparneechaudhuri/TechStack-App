import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{flex: 1}}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
