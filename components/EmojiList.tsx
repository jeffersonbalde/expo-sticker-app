import { useState } from "react";
import { FlatList, StyleSheet, Image, Platform, Pressable } from "react-native";

// const imagePlaceHolder = require('../assets/images/emoji1.png');

export default function EmojiList({ onSelect, onCloseModal}) {
    const [emoji] = useState([
        require('../assets/images/emoji1.png'),
        require('../assets/images/flushed.png'),
        require('../assets/images/heart_eyes.png'),
        require('../assets/images/kissing_heart.png'),
        require('../assets/images/money_mouth_face.png'),
        require('../assets/images/relaxed.png'),
    ]);

    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={Platform.OS == 'web'}
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index}) => (
                <Pressable
                    onPress={() => {
                        onSelect(item);
                        onCloseModal();
                    }}
                >
                    <Image source={item} key={index} style={styles.image}/> 
                </Pressable>
            )}   
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      width: 100,
      height: 100,
      marginRight: 20,
    },
  });