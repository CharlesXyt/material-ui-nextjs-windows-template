import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/ui/theme';
import Header from '../src/ui/Header'
import Footer from '../src/ui/Footer'

export default class MyApp extends App {

  constructor(props){
    super(props)
    this.state={
      selectedIndex:0,
      value:0
    }
  }

  setValue = index => {
    this.setState({value:index})
  }

  setSelectedIndex = selectedIndex => {

    this.setState({selectedIndex:selectedIndex})
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Arc Development</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <Header value={this.state.value} setValue={this.setValue} selectedIndex={this.state.selectedIndex} setSelectedIndex={this.setSelectedIndex}/>
          <Component {...pageProps} setValue={this.setValue} setSelectedIndex={this.setSelectedIndex}/>
          <Footer setValue={this.setValue} setSelectedIndex={this.setSelectedIndex}/>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
