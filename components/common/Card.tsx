import React from "react";
import { ProgressViewIOSComponent, StyleProp, Text, View } from "react-native";

export type CardProps = {
    title: string;
    children?: React.ReactNode;
}

export default function Card(props: CardProps) {
    return <View style={{display: "flex", flexDirection: "column", shadowColor: "rgba(0,0,0,0.25)", shadowOffset: {height: 2, width: 2}, shadowRadius: 2, margin: 8, padding: 8}}>
        <Text style={{fontSize: 32, fontWeight: "bold", color:"#3D3B8E"}}>{props.title}</Text>
        <View>
            {props.children}
        </View>
    </View>;
}