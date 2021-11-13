import React from 'react'
import { View, Text, Image } from 'react-native'



export default function IconsCategories(props) {
    const { url, title } = props;
    return (
        <View style={{ width: 60, height: 110, backgroundColor: 'rgba(242, 199, 68,0.0)', borderRadius: 34, marginRight: 4 }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'background:rgba(255,255,255,0.1);', top: 10, left: 5, borderRadius: 30 }}></View>
            <Image source={{ uri: url }} style={{ width: 40, height: 40, left: 10, position: 'absolute', top: 15, borderRadius: 20 }} />
            <Text style={{ textAlign: 'center', top: 20 }}>{title}</Text>
        </View>
    )
}


