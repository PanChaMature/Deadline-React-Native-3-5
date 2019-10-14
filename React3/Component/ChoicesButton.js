import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const ChoicesButton = (props) => {
    return(
        (CHOICES.map(choice =>{
            return(
                <TouchableOpacity style={styles.buttonStyle} key={choice.name} onPress={()=> props.onButtonPress(choice.name)}> 
                <Text style={styles.buttonText}>{choice.name} </Text>
                </TouchableOpacity>
            )
        }))
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 200,
        margin: 10,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#640D14',
      },
      buttonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
      },
});

export default ChoicesButton;
