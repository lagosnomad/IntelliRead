
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Text, Button, Icon, Caption, Title, Screen, Divider, View, Row, Overlay } from '@shoutem/ui';
import {Actions} from 'react-native-router-flux';

export default class ViewNews extends Component<{}> {
  
  home(){
    Actions.home();
  }

  viewNews(newspost){
    Actions.viewnews({newspost: newspost});
  }

  constructor(props) {
    super(props);
    this.state = {
      newspost: [],  
    }
  }
  
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Screen style={{ flex: 1 }}>
          <Divider styleName="line" />
          <Divider styleName="line" />
          <ScrollView>
          { 
            <View>
              <Overlay>
                 <Title style={{color: '#fff',  fontWeight: '800'}} styleName="md-gutter-bottom">{
                   this.props.newspost.postTitle.toUpperCase()}
                 </Title>
                 <Caption style={{color: '#fff'}}>{this.props.newspost.postSection}, {this.props.newspost.postDate}.</Caption>
              </Overlay>
              <Screen style={{paddingLeft: 15, paddingRight: 15, paddingTop: 15, paddingBottom: 15, }} styleName="paper">
                <Text>
                {this.props.newspost.postAbstract} {'\n'}
                </Text>
                <Row>
                    <View styleName="vertical stretch space-between">
                        <View styleName="horizontal space-between">
                            <Caption style={{
                            color: '#000', 
                            marginLeft: 1,
                            fontSize: 12,
                            }}>Published by {this.props.newspost.postBy}</Caption>
                        </View>
                    </View>
                </Row>
                <Button styleName="secondary">
                    <Icon name="web" />
                    <Text>Read More</Text>
                </Button>
                <Divider styleName="line" />
              </Screen>
            </View>
          }  
          </ScrollView>
        </Screen>        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

