/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import _ from 'lodash';
import JobDetail from '../components/JobDetail';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'blue'},
});

const axios = require('axios');

const emptyArray = [];

const JobDetails = props => {
  const [data, setData] = useState({});

  useEffect(() => {
    const {route} = props;
    console.log(route.params);
    if (route.params?.job.Id) {
      getJobItem(route.params?.job.Id, route.params?.token);
    }
  }, emptyArray);

  const getJobItem = (id, token) => {
    axios
      .get(`https://api-uat.mrusta.com/v1/UAE-en/job/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setData(res.data.Data);
        console.log('res: ', res.data);
      })
      .catch(err => {
        setData({});
        console.log('error: ', err);
      });
  };
  return (
    <SafeAreaView style-={styles.container}>
      {!_.isEmpty(data) && (
        <JobDetail item={data} jobData={props.route.params?.job} />
      )}
    </SafeAreaView>
  );
};

export default JobDetails;
