import React from 'react';
import {Text, View, Button, useState} from 'react-native';
Search = () => {
  const [title, settitle] = useState('');
  const searchMovie = (title) => {
    // requete
  };
  return (
    <View>
      <Text>Search a movie :</Text>
      <TextInput
        onChangeText={title => settitle(title)}
        value={userName}
        placeholder="Movie title"
      />
      <Button title="Search movie" onPress={searchMovie(title)} />
    </View>
  );
};
export default Search;
