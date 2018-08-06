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
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native';
import MasonryList from './MasonryList';

const {width, height} = Dimensions.get('window');

const itemWidth = (width - 16) / 2;

const secToTime = (s) => {
    let h = 0, m = 0;
    if (s > 60) {
        m = parseInt(s / 60);
        s = parseInt(s % 60);
        if (m > 60) {
            h = parseInt(i / 60);
            m = parseInt(i % 60);
        }
    }
    // 补零
    const zero = (v) => {
        return (v >> 0) < 10 ? ("0" + v) : v;
    };
    return (h == 0 ? [zero(m), zero(s)].join(":") : [zero(h), zero(m), zero(s)].join(":"));
}

/*
* 瀑布流
* 参考：
* https://www.jianshu.com/p/88a56de0191d
* */

export default class PageOne1 extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [],
            np: 0,
        }
    }

    componentDidMount = () => {
        this.onRefreshing();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <MasonryList
                    data={this.state.data}
                    numColumns={2}
                    renderItem={this._renderItem}
                    getHeightForItem={this._getHeightForItem}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefreshing}
                    onEndReachedThreshold={0.5}
                    onEndReached={this._onEndReached}
                    keyExtractor={this._keyExtractor}
                />
            </SafeAreaView>
        );
    }

    onRefreshing = () => {
        this.setState({
            refreshing: true,
        })

        fetch('https://d.api.budejie.com/forum/subscribe/bs0315-iphone-4.5.9.json')
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData)

                this.setState({
                    refreshing: false,
                    data: jsonData.list,
                })
            })
            .catch((error) => {
                console.log(error);
            })
        ;
    }

    _onEndReached = () => {

        // fetch('http://d.api.budejie.com/forum/subscribe/bs0315-iphone-4.5.9.json')
        //     .then((response) => response.json())
        //     .then((jsonData) => {
        //         this.setState({
        //             data: [...this.state.data, ...jsonData.list],
        //         })
        //     });
    }

    _keyExtractor = (item, index) => {
        return item.text + index;
    }

    _getHeightForItem = ({item}) => {
        return Math.max(itemWidth, Math.floor(Math.random()*(250-160+1)+160));//这里取160-250的随机数 因是后台返回宽高 itemWidth / item.video.width * item.video.height
    }

    _renderItem = ({item}) => {
        const itemHeight = this._getHeightForItem({item});
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this._onPressContent(item)}
                style={styles.item}>
                <Image
                    source={{uri: item.image_list}}
                    style={{width: itemWidth, height: itemHeight, borderRadius: 4}}
                />
                <View style={styles.itemText}>
                    <Text style={{color: '#fff'}}>{item.tail}</Text>
                    <Text style={{color: '#fff'}}>{item.theme_name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _onPressContent = (item) => {
        alert(111)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        margin: 4,
    },
    itemText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 30,
        backgroundColor: '#0002',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
})
