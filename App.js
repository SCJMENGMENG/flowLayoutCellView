/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,

} from 'react-native';
import {Router, Scene, Tabs} from 'react-native-router-flux';
import PageOne from './pageOne';
import PageOne1 from './pageOne1';
import PageTwo from './pageTwo';
import PageThree from './pageThree';

/*
* react-native-router-flux
* 使用：
* https://blog.csdn.net/f409031mn/article/details/79692580
* https://www.jianshu.com/p/37428d579cf6
* */

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const img = require('./headImg.jpg');

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Router>
                {/*<Scene key="root">*/}
                {/*<Scene*/}
                {/*key="one"*/}
                {/*component={PageOne}*/}
                {/*title="PageOne"*/}
                {/*initial={true}*/}
                {/*/>*/}
                {/*<Scene*/}
                {/*key="two"*/}
                {/*component={PageTwo}*/}
                {/*title="PageTwo"*/}
                {/*/>*/}
                {/*<Scene*/}
                {/*key="three"*/}
                {/*component={PageThree}*/}
                {/*title="PageThree"*/}
                {/*/>*/}
                {/*</Scene>*/}

                <Scene hideNavBar tabBarPosition="bottom">
                    <Tabs
                        key='tabbar'
                        swipeEnabled
                        wrap={false}
                        showLabel={false}
                        tabBarStyle={{backgroundColor: '#eee'}}
                        activeBackgroundColor='white'
                        inactiveBackgroundColor='red'
                    >
                        <Scene>
                            <Scene
                                key='one'
                                icon={this.TabIcon}
                                component={PageOne}
                                title='PageOne'
                            />
                            <Scene
                                key='one1'
                                icon={this.TabIcon}
                                component={PageOne1}
                                hideTabBar={true}
                                title='PageOne1'
                            />
                        </Scene>

                        <Scene
                            key='two'
                            icon={this.TabIcon}
                            component={PageTwo}
                            title='PageTwo'
                        />

                        <Scene
                            key='three'
                            icon={this.TabIcon}
                            component={PageThree}
                            title='PageThree'
                        />
                    </Tabs>
                </Scene>
            </Router>
        );
    }

    TabIcon = ({focused, title}) => {

        return (
            <View style={{alignItems: "center"}}>
                <Text style={{color: focused ? 'blue' : 'black'}}>{title}</Text>
                <Image style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'green',
                    marginTop: 5
                }} source={img}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
