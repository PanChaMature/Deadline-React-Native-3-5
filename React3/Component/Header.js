import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Header= (props) =>{
    return(
        <View style={styles.headerWarrper}>
            <Text style={styles.headerText} >{props.result}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headerWarrper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        fontSize: 20,
        fontWeight: 'bold',
    }
});
export default Header;