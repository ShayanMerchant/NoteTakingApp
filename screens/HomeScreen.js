import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import NoteItem from '../components/NoteItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (isFocused) {
      AsyncStorage.getItem('notes')
        .then(value => {
          setNotes(JSON.parse(value));
        })
        .catch(err => console.log('Error Message' + err));
    }
  }, [isFocused]);

  const addNote = () => {
    navigation.navigate('AddNote');
  };

  const deleteNote = id => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <View style={styles.home}>
      <FlatList
        data={[notes]}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <NoteItem note={item} onDelete={() => deleteNote(item.id)} />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={addNote}>
        <Text style={styles.buttonText}>Add New Note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
  button: {
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'rgb(0, 122, 255)',
    fontSize: 20,
    fontWeight: '700',
  },
});
