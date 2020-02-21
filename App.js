
import React from 'react';
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text
} from 'react-native';


class App extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {

    return (

      <View style={styles.container}>

        <Text>Test</Text>

      </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: 'white'
  },
});

export default App;