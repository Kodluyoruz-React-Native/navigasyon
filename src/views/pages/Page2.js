import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { pageStyle } from '../../stil';

class Page2 extends React.Component {
    render() {
        //let gelenVeri = this.props.navigation.getParam('gelenVeri');

        return (
            <View style={pageStyle.container}>
                <Text>SAYFA 2</Text>

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
                    onPress={() => { this.props.navigation.navigate('P3') }}
                >
                    <Text>Sayfa3 e git</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Page2;
