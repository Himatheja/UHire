/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import colors from '../constants/colors';
import JobListItem from '../components/JobListItem';

const axios = require('axios');

const emptyArray = [];

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.light_orange},
});

const HomePage = props => {
  const [loading, setLoading] = useState(true);
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const {route} = props;
    if (route.params?.data) {
      getJobList(route.params?.data);
    }
  }, emptyArray);

  const getJobList = data => {
    axios
      .get('https://api-uat.mrusta.com/v1/UAE-en/ustajobs/myjobsbypage/1', {
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      })
      .then(res => {
        setLoading(false);
        console.log('res: ', res.data);
        setJobList(res.data.Data || []);
      })
      .catch(err => {
        setLoading(false);
        console.log('error: ', err);
      });
  };

  const onJobItemClicked = job => {
    const {route} = props;
    props.navigation.navigate('JobDetails', {
      job,
      token: route.params?.data.access_token,
    });
  };

  return (
    <SafeAreaView style-={styles.container}>
      <FlatList
        data={jobList}
        style={{width: '100%', flex: 0}}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => (
          <JobListItem
            item={item}
            onJobItemClicked={() => onJobItemClicked(item.Job)}
          />
        )}
      />
      <ActivityIndicator animating={loading} />
    </SafeAreaView>
  );
};

export default HomePage;
