import React from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableNativeFeedback,
    ListView
} from 'react-native';

import InfoPanel from './infoPanel.js';
import styles from './styles/main.js';

const Category = ({
    sections
}) => (
    <ScrollView style={styles.contentView}>
        <ListView contentContainerStyle={styles.contentView}
            dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(sections)}
            renderRow={(rowData) =>
                <InfoPanel {...rowData} />
            }
            renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={{opacity: 0.2, backgroundColor: '#FFFFFF', height: 1}}/>}
        />
    </ScrollView>
);

export default Category;
