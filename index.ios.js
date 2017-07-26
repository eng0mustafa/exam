import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

class Counter extends Component {

  state = {count: 0 , rc: 0, gc: 255, bc: 255 }

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1, rc: this.state.rc + 5, gc:this.state.gc - 10, bc:this.state.bc - 10 })
    }, 1000)


  }

  render() {
    const {count} = this.state
    const {rc} = this.state
    const {gc} = this.state
    const {bc} = this.state
    const {size} = this.props


    return (
      <Text style={{fontSize: size , color: `rgb(${rc},${gc},${bc})`}}>
        {count}
       

      </Text>
    )
  }
}

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Counter size={32} />
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


AppRegistry.registerComponent('Awe', () => App);
