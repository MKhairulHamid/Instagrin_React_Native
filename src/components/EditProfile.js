import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Header, Button, Input, Overlay } from 'react-native-elements';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import { API_URL } from '../helpers/apiurl';
import { 
    onInputEditProfileText,
    saveProfile,
    saveProfileImage
    } from '../actions';

class EditProfile extends React.Component {
    state = { isVisible : false }

    componentDidUpdate() {
        if(this.props.editProfile.saveProfileSuccess) {
            this.props.navigation.goBack()
        }
    }

    onSaveProfile = () => {
        this.props.saveProfile(this.props.editProfile)
    }

    onSelectGaleryPress = () => {
        ImagePicker.openPicker({
            width: 700,
            height: 700,
            cropping: true
          }).then(image => {
            console.log(image);
            this.setState({ isVisible: false })
            this.props.saveProfileImage(image)
          }).catch(err => {
              console.log(err)
          });
    }

    onOpenCameraPress = () => {

    }
    
    render() { 
        
        console.log(this.props.editProfile.displayname)
        return ( 
            <View>
                <Header 
                    placement="left"
                    leftComponent={{
                        icon: 'clear',
                        color: 'black',
                        onPress:() => this.props.navigation.goBack()
                    }}
                    centerComponent={{
                        text : 'Edit Profile',
                        style: { color : 'black', fontSize:18 , fontWeight: '700'}
                    }}
                    rightComponent={{
                        icon: 'done',
                        color: '#4388d6',
                        onPress: this.onSaveProfile
                        
                    }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0: -25
                    }}
                />
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Image 
                        source={{uri: `${API_URL}${this.props.editProfile.profileImage}`}}
                        style={{ width: 90, height: 90, borderRadius: 90}}
                    />

                    <TouchableWithoutFeedback
                        onPress={() => this.setState({ isVisible : true })}
                    >
                        <Text style={{ color: '#4388d6', fontSize:17 , paddingTop: 10 }} >
                            Change Profile Photo
                        </Text>
                    </TouchableWithoutFeedback>
                    
                <View style={{ paddingTop: 15 }}>
                    <Text style={{ 
                        paddingLeft: 12,
                        opacity: 0.3
                    }}>
                        Name
                    </Text>
                    <Input
                        placeholder='Name'
                        value={this.props.editProfile.displayname}
                        onChangeText={(text) => this.props.onInputEditProfileText('displayname', text)}
                    />
                </View>

                <View style={{ paddingTop: 15 }}>
                    <Text style={{ 
                        paddingLeft: 12,
                        opacity: 0.3
                    }}>
                        Username
                    </Text>
                    <Input
                        placeholder='Username'
                        value={this.props.editProfile.username}
                        onChangeText={(text) => this.props.onInputEditProfileText('username', text)}
                    />
                </View>

                <View style={{ paddingTop: 15 }}>
                    <Text style={{ 
                        paddingLeft: 12,
                        opacity: 0.3
                    }}>
                        Bio
                    </Text>
                    <Input
                        placeholder='Bio'
                        value={this.props.editProfile.bio}
                        onChangeText={(text) => this.props.onInputEditProfileText('bio', text)}
                    />
                </View>



                <Overlay
                        isVisible={this.state.isVisible}
                        height={'auto'}
                        onBackdropPress={()=> this.setState({ isVisible: false})}
                 >
                    <View>

                        <Text style={{ 
                            color:'#4388d6', 
                            fontSize: 17 , 
                            paddingTop:10 ,
                            borderBottomColor : '#cfcfcf',
                            borderBottomWidth : 1
                            }}
                        >
                        Change Profile Photo

                        </Text>

                        <TouchableWithoutFeedback
                            onPress={this.onSelectGaleryPress}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    paddingVertical: 15
                                }}
                            >
                                Select From Gallery
                            </Text>
                            
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={this.onOpenCameraPress}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    paddingVertical: 15
                                }}
                            >
                                Open Camera
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                </Overlay>
                </View>            
            </View>
         );
    }
}

const mapStatetoProps = ({ editProfile }) =>{
    return { editProfile }
}
 
export default connect(mapStatetoProps, { onInputEditProfileText, saveProfile, saveProfileImage }) (EditProfile);