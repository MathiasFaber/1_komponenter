import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

{/*HUSK AT SKIFTE NAVN*/}
const FC = (props) => {

    return (
            <View style={styles.container}>
               {<Text>Dette er en komponent</Text>}
            </View>
    );
}

{/*HUSK AT SKIFTE NAVN*/}
export default FC;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});