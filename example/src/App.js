/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import { Dimensions } from 'react-native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';

import { StyleSheet } from 'react-native';
import ImageGrid from '@baronha/react-native-image-grid';
import { openPicker } from '@baronha/react-native-multiple-image-picker';

const { width } = Dimensions.get('window');

export default function App() {
  const [images, setImages] = useState([]);

  const onPressImage = (item, index) => {
    console.log(item, index);
  };

  const onPicker = async () => {
    try {
      const response = await openPicker({
        selectedAssets: images,
        isExportThumbnail: true,
        maxVideo: 1,
        singleSelectedMode: true,
        isCrop: true,
      });
      // console.log(response);
      // setImages(response);
    } catch (e) {}
  };

  return (
    <View style={style.container}>
      <ScrollView contentContainerStyle={{ paddingTop: 132 }}>
        <View style={{ alignItems: 'center' }}>
          <ImageGrid
            dataImage={images}
            onPressImage={onPressImage}
            // spaceSize={10}
            containerStyle={{ marginTop: 3 }}
            width={Dimensions.get('window').width - 6}
            sourceKey={'path'}
            videoKey={'type'}
            conditionCheckVideo={'video'}
            videoURLKey={'thumbnail'}
          />
          <TouchableOpacity style={style.buttonOpen} onPress={onPicker}>
            <Text style={style.textOpen}>Open Gallery</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={style.header}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
        <SafeAreaView />
        <Text style={style.title}>PICKER</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  title: {
    fontWeight: '900',
    fontSize: 24,
    paddingVertical: 24,
    fontFamily: 'Avenir',
    color: '#cdac81',
    textAlign: 'center',
  },
  buttonOpen: {
    margin: 24,
    backgroundColor: '#fff',
    padding: 12,
    alignItems: 'center',
    width: width - 48,
  },
  textOpen: {
    fontWeight: 'bold',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
});
