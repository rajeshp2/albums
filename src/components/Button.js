import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;
   return (
     <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>Donate or Receive
        </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#17161b',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ddd',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ff0000',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  }
};

export default Button;
