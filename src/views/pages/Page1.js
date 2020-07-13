import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { pageStyle } from '../../stil';

class Page1 extends React.Component {
    render() {
        return (
            <View style={pageStyle.container}>
                <Text>SAYFA 1</Text>

                <TouchableOpacity
                    style={pageStyle.button}
                    onPress={() => { this.props.navigation.goBack(); }}
                >
                    <Text>geri git</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={pageStyle.button}
                    onPress={() => {
                        this.props.navigation.navigate(
                            'P2',
                            { gidenveri: 'mahmut' }
                        )
                    }}
                >
                    <Text>Sayfa2 ye git</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={pageStyle.button}
                    onPress={() => { this.props.navigation.navigate('P3') }}
                >
                    <Text>Sayfa3 e git</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Page1;
