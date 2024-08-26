import { StyleSheet, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
import CircleButton from '@/components/CircleButton';
import IconButton from '@/components/IconButton';
import * as ImagePicker from 'expo-image-picker';
import EmojiPicker from '@/components/EmojiPicker';

const imagePlaceHolder = require('../../assets/images/jeff.jpeg')

export default function HomeScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAddOptions(true);
    }else {
      alert('You did not select any image.');
    }
  }

  const onReset = () => {
    setShowAddOptions(false);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onSaveImageSync = () => {
    
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeHolderImageSource={imagePlaceHolder} selectedImage={selectedImage}/>
        </View>
      { showAddOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset}/>
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageSync}/>
          </View>
        </View>
      ): (
        <View style={styles.footerContainer}>
          <Button label='Choose a photo' theme='primary' onPress={pickImageAsync}/>
          <Button label='Use this photo' onPress={() => setShowAddOptions(true)}/>
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});