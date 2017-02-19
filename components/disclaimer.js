import React from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableNativeFeedback,
    AsyncStorage
} from 'react-native';

import Intro from './intro';
import Home from './home';
import styles from './styles/main';

const Disclaimer = ({
    navigator
}) => (
    <View style={styles.contentView}>
        <ScrollView style={{
            padding: 10,
            flex: .5
        }}>
            <Text style={styles.disclaimerText}>{
                'The information contained in this app is for general information purposes only. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.'
            }
            </Text>
        </ScrollView>
        <TouchableNativeFeedback
            onPress={() => {
                //const hasLoaded = await AsyncStorage.getItem('@DentalAppStore:hasLoaded');
                //if (hasLoaded) {
                    navigator.push({name: 'Home', component: Home});
                //} else {
                    //navigator.push({name: 'Introduction', component: Intro});
                //}
            }}
          >
            <View style={{
                flex: .1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={styles.button}>Enter ›</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
);

export default Disclaimer;
