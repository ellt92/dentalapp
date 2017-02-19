import React from 'react';
import {
    View,
    Text,
    TouchableNativeFeedback
} from 'react-native';

const Button = ({
    action,
    style
}) => (
    <View>
          <TouchableNativeFeedback
            onPress={action}
          >
              <View>
                <Text>I accept!</Text>
              </View>
          </TouchableNativeFeedback>
    </View>
);

export default Button;
