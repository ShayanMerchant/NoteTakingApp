// components/NoteItem.js
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const NoteItem = ({note, onDelete}) => {
  return (
    <View>
      <Text style={styles.text}>Client: {note.client}</Text>
      <Text style={styles.text}>Category: {note.category}</Text>
      <Text style={styles.text}>Note: {note.text}</Text>
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
