/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
           <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://academycenter.org/wp-content/uploads/2018/12/back-to-the-future-trilogy-1122951-1280x0.jpg',
            }}
          />
          {hovered && <Text>Back to the Future</Text>}
           </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },

});

export default App;
