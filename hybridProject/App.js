import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countActions from './actions/counts';

class App extends Component {
  decrementCount() {
    let { count, actions } = this.props;
    count--;
    actions.changeCount(count);
  }
  incrementCount() {
    let { count, actions } = this.props;
    count++;
    actions.changeCount(count);
  }
  render() {
    const { count } = this.props;
    return (
      <View styles={styles.container}>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Text style={styles.textCenter}>{count}</Text>
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    marginTop:500,
    justifyContent: "space-between",
    alignItems: 'flex-end'

  },
  textCenter:{
    textAlign :'center'
  }
});

const mapStateToProps = state => ({
  count: state.count.count,
});

const ActionCreators = Object.assign(
  {},
  countActions,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)