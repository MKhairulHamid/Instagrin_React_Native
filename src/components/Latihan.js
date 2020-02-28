import React from 'react';
import { View, Text, Image , ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import * as Animatable from 'react-native-animatable';



 

class App extends React.Component {
  state = {  }
  render() { 
    return ( 
        <View>

        

            <Header
                placement="left"
                leftComponent={{ icon: 'home', type : 'material', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />

          <Animatable.View 
                animation="tada" 
                duration={3000}
                delay={1000}
                iterationCount={3}
            >
          <ScrollView>

            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzucMRW3oVRGZDosFcWXjn0bBD70wAsWomujlIL4DGy0uzGoUQ'}} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'data:image/jpeg;base64,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'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
          </Card>

         

          <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6IT5rN3bmo6lhbrZDh5Pdu19OoM8uFtRvk6LzrTZP22uLf2kc'}} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'data:image/jpeg;base64,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'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
          </Card>




          <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzucMRW3oVRGZDosFcWXjn0bBD70wAsWomujlIL4DGy0uzGoUQ'}} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlKHt1ltU9ojOJmFSxyXmnlf_Kqgfnt7y0aANWymmydYZ7AsKF'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
          </Card>

          

          </ScrollView>

        </Animatable.View>
        </View>
     );
  }
}
 
export default App;