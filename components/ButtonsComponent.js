import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';

const BC = (props) => {

    const [active, setActive] = useState(false)

    return (
            <View style={styles.container}>
               <Text>{active ? "ja kode" : "nej kode"}</Text>
               <BC title={"Kode?"} onPress={()=> setActive(!active)}/>
            </View>
    );
}

export default BC;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});