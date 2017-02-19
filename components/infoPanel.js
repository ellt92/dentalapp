import React from 'react';
import {
    View,
    Text,
    TouchableNativeFeedback,
    ListView,
    LayoutAnimation,
    Animated
} from 'react-native';

import styles from './styles/main.js';

class InfoPanel extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
        data: React.PropTypes.string
    };
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        };
    }
    toggleVisible = () => {
        this.setState({hidden: !this.state.hidden});
    }
    render() {
        return (
            <View>
                <TouchableNativeFeedback onPress={this.toggleVisible}>
                    <View>
                        <View style={{backgroundColor: 'rgb(163, 216, 255)', padding: 10}}>
                            <Text style={styles.categoryTitleText}>{this.props.title}</Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            padding: this.state.hidden ? undefined : 10
                        }}>
                            <Animated.Text style={{
                                color: 'black',
                                backgroundColor: 'white',
                                textAlign: 'left',
                                fontSize: 14,
                                fontFamily: 'merriweathersans',
                                height: this.state.hidden ? 0 : undefined
                            }}>
                                {this.props.data}
                            </Animated.Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

export default InfoPanel;
