/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddNoteScreen = ({navigation}) => {
  const [client, setClient] = useState('');
  const [category, setCategory] = useState('');
  const [noteText, setNoteText] = useState('');

  const saveNote = () => {
    const newNote = {
      id: Date.now(),
      client: client,
      category: category,
      text: noteText,
    };

    AsyncStorage.setItem('notes', JSON.stringify(newNote));
    console.log('New Note:' + JSON.stringify(newNote));
    navigation.goBack();
  };

  return (
    <View style={styles.addNote}>
      <Text style={styles.text}>Client:</Text>
      <TextInput
        style={styles.textInput}
        value={client}
        onChangeText={setClient}
      />
      <Text style={styles.text}>Category:</Text>
      <Text style={styles.text}>Select a Category</Text>
      <Picker
        itemStyle={{fontSize: 25, color: 'rgb(0, 122, 255)'}}
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
        <Picker.Item label="Goal Evidence" value="Goal Evidence" />
        <Picker.Item
          label="Support Coordination"
          value="Support Coordination"
        />
        <Picker.Item label="Active Duty" value="Active Duty" />
      </Picker>
      <Text style={styles.text}>Note:</Text>
      <TextInput
        style={{...styles.textInput, height: 100}}
        value={noteText}
        onChangeText={setNoteText}
        multiline={true}
      />
      <TouchableOpacity style={styles.button} onPress={saveNote}>
        <Text style={styles.buttonText}>Save Note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  addNote: {
    padding: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    paddingVertical: 5,
    fontWeight: '600',
  },
  textInput: {
    width: '100%',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 18,
  },
  button: {
    padding: 20,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'rgb(0, 122, 255)',
    fontSize: 20,
    fontWeight: '700',
  },
});
