import React,{useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
const Search = () => {
  const [title, setTitle] = useState('');
  const searchMovie = (title) => {
    // request
  };
  return (
    <View>
      <Text>Search a movie :</Text>
      <TextInput
        onChangeText={title => setTitle(title)}
        value={title}
        placeholder="Movie title"
      />
      <Button title="Search movie" onPress={searchMovie(title)} />
    </View>
  );
};
export default Search;
