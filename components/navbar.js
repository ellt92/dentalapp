import React from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from './styles/main';

const NavBar = ({
    title
}) => (
    <View style={styles.navBar}>
        <Text style={styles.navBarTitle}>
            {title}
        </Text>
    </View>
);

export default NavBar;
