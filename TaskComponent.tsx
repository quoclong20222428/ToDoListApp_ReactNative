/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


export default function TaskComponent(props: any): React.JSX.Element {
    const [isCheck, setIsCheck] = useState<boolean>(false)

    return (
        <View style={styles.item}>
            <View style={styles.content}>
                <Checkbox
                    value={isCheck}
                    onValueChange={setIsCheck}
                    color={isCheck ? '#54D02A' : undefined}
                    style={styles.square}
                />
                <Text style={{ maxWidth: '100%' }}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    square: {
        height: 24,
        width: 24,
        borderRadius: 5,
        borderWidth: 1,
        marginRight: 5
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        textAlign: 'left'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    item: {
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

