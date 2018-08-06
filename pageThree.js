import  React from 'react';
import {
   View,
   Text
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PageThree extends React.Component{
    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text
                    style={{
                        fontSize: 15,
                        color: 'blue',
                    }}
                    onPress={() => Actions.pop({
                        refresh: {
                            data: '从three回到two'
                        }
                    })}
                >
                    我是Page Three
                </Text>
                <Text>{this.props.data}</Text>
            </View>
        )
    }
}
