import React from 'react';
import {
    View,
    Text,
    TouchableNativeFeedback,
    ListView,
    Image
} from 'react-native';

import styles from './styles/main';
import Category from './category';
import appData from '../app-data'

const Home = ({
    navigator
}) => (
    <ListView contentContainerStyle={styles.homeView}
        dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(appData)}
        renderRow={(rowData) =>
            <View style={styles.homeListItem}>
                <TouchableNativeFeedback onPress={() => navigator.push({props: {sections: rowData.sections}, name: rowData.title, component: Category})}>
                    <View style={styles.homeListItemTextWrapper}>
                        <Text style={styles.homeListItemText}>{rowData.title} ›</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        }
        renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={{opacity: 0.5, backgroundColor: '#FFFFFF', height: 1}}/>}
    />
);

export default Home;
