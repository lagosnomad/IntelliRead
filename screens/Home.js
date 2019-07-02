
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Image, Subtitle, Caption, Button, Icon, Screen, Divider, View, Row, ListView, Spinner } from '@shoutem/ui';
import {Actions} from 'react-native-router-flux';
import renderIf from '../helpers/renderIf';

const NYTIMES_API_KEY = "cIJzuX6QqW7EpqPzWGlqBlfphSN4hW4t";
const SECTION = "all-sections";
const PERIOD = 1;
API_URL_BASE = "api.nytimes.com";


export default class News extends Component<{}> {
  
  home(){
    Actions.home();
  }

  viewNews(newspost){
    Actions.viewnews({newspost: newspost});
  }
  
  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(`https://${API_URL_BASE}/svc/mostpopular/v2/mostviewed/${SECTION}/${PERIOD}.json?api-key=${NYTIMES_API_KEY}`);
    const json = await response.json();
    this.setState({ news: json.results, isLoadingNews: false });
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      news: [],  
      isLoadingNews: true,
    }
  }

  renderRow(post) {
    let newspost = {
      postId: post.id,
      postDate: post.published_date,
      postTitle: post.title,
      postBy: post.byline,
      postAbstract: post.abstract,
      postUrl: post.url,
      postSection: post.section
    }
    return (
      <View>
        <Row>
          <Image
            styleName="small-avatar"
            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
          />
          <View styleName="vertical stretch space-between">
          <Subtitle style={{
              color: '#000', 
              fontWeight: '700',
            }} 
            numberOfLines={2} 
            newspost={newspost} 
            onPress={() => this.viewNews(newspost)}>
            {post.title}
            </Subtitle>
            <Subtitle style={{
              color: '#000',
              fontSize:10,
            }} numberOfLines={2} >{post.byline}</Subtitle>
            <View styleName="horizontal space-between">
              <Caption> </Caption>
              <Caption style={{
              color: '#000',
              fontSize: 12,
            }}><Icon name="add-event" />{post.published_date}</Caption>
            </View>
          </View>
          <Button styleName="right-icon"><Icon name="right-arrow" /></Button>
        </Row>
        <Divider styleName="line" />
      </View>
    );
  }

  render() {
    const news = this.state.news;
    const { isLoadingNews } = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <Screen  style={{ flex: 1 }}>
          <Divider styleName="line" />
          <ScrollView>
            {renderIf(this.state.isLoadingNews, 
              <View>
                <Spinner style={{size: "small", color: "#000"}}></Spinner>
              </View>
            )}
            <ListView
              data={news}
              renderRow={this.renderRow}
            />
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
