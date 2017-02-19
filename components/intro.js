import React from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableNativeFeedback,
    AsyncStorage
} from 'react-native';

import Home from './home';
import styles from './styles/main';

const Intro = ({
    navigator
}) => (
    <View style={styles.contentView}>
        <ScrollView style={{
            padding: 10,
            flex: .9
        }}>
            <Text style={styles.disclaimerText}>{
                'Hello and welcome to the Dental Care App. Your tool to help you in achieving better oral health! We feel that most dental issues are preventable if only we had known better and this app is here to teach you different ways to help look after your teeth.'
            }
            </Text>
        </ScrollView>
        <TouchableNativeFeedback
            onPress={() => {
                //await AsyncStorage.setItem('@DentalAppStore:hasLoaded', true);
                navigator.push({name: 'Home', component: Home});
            }}
          >
            <View style={{
                flex: .1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={styles.button}>Got it!</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
);

export default Intro;
