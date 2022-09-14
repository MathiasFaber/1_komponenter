import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const PC = (props) => {

    const {name} = props 

    return (
            <View style={styles.container}>
               {<Text>{name}</Text>}
            </View>
    );
}

export default PC;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});