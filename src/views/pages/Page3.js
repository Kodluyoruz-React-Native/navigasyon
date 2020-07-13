import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { pageStyle } from '../../stil';

class Page3 extends React.Component {
    render() {
        return (
            <View style={pageStyle.container}>
                <Text>SAYFA 3</Text>

                <TouchableOpacity
                    style={pageStyle.button}
                    onPress={() => { this.props.navigation.goBack(); }}
                >
                    <Text>geri git</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={pageStyle.button}
                    onPress={() => { this.props.navigation.navigate('P1') }}
                >
                    <Text>Sayfa1 e git</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={pageStyle.button}
                    onPress={() => { this.props.navigation.navigate('P2') }}
                >
                    <Text>Sayfa2 ye git</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Page3;
