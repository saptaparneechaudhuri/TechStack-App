import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem({item}) {
    return <ListItem library={item} />;
  }

  render() {
    // console.log(this.props);
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries,
  };
};

export default connect(mapStateToProps)(LibraryList);
