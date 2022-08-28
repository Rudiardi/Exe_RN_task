import React, {useState} from "react";
import {
    View,
    Text,
    Button,
    TextInput, 
    Image
} from 'react-native'
import { colors } from "../../styles";

import {styles} from './styles';

export default function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassWord] = useState('');
    
    return(    
        <View style={styles.container}>
            <Image 
                source={require('../../assets/icon.png')}
                
            />
            <TextInput
                value={email}
                onChangeText={value=>setEmail(value)}
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={colors.PLACEHOLDERTEXTCOLOR}
            />
        </View>
    )
}