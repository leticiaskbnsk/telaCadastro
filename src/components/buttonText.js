import React from "react";
import { View, Image } from "react-native";

export default function buttonText() {
    return (
        <View style={styles.container}>
        <StatusBar hidden />

        <Image style={{width:400,height:200}} source={require('./assets/fundo3.imag.jpg')} />

        </View>
    );
}