import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  content: {
    width: '100%',
    padding: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
  },
  marginTop8: {marginTop: 8},
  boldText: {fontWeight: 'bold'},
});

// Display JobId, customer details, job title, job location, job images, job status, job date and created date.

const JobDetail = ({item, jobData}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: item.CustomerThumb,
          }}
          style={{width: 150, height: 150, alignSelf: 'center'}}
          resizeMode="contain"
        />
        <Text>
          <Text style={styles.boldText}>Job ID : </Text>
          {item.Id}
        </Text>
        <Text style={styles.marginTop8}>
          <Text style={styles.boldText}>Customer Details : </Text>
          {item.CustomerName}
        </Text>
        <Text style={styles.marginTop8}>
          <Text style={styles.boldText}>Job Title : </Text>
          {item.Title}
        </Text>
        <Text style={styles.marginTop8}>
          <Text style={styles.boldText}>Job Location : </Text>
          {item.Address || '-'}
        </Text>
        <Text style={styles.marginTop8}>
          <Text style={styles.boldText}>Job Status : </Text>
          {jobData.StatusAsString || '-'}
        </Text>
        <Text style={styles.marginTop8}>
          <Text style={styles.boldText}>Job Date : </Text>
          {moment(item.JobDateUtc).format('DD MMMM, YYYY')}
        </Text>
        <Text style={styles.marginTop8}>
          <Text style={styles.boldText}>Created Date : </Text>
          {moment(item.CreatedOnUtc).format('DD MMMM, YYYY')}
        </Text>
      </View>
    </View>
  );
};

JobDetail.propTypes = {
  item: PropTypes.shape({
    Job: PropTypes.shape({
      CreatedOnUtc: PropTypes.any,
      CustomerName: PropTypes.any,
      StatusAsString: PropTypes.any,
      Title: PropTypes.any,
    }),
  }),
};

export default JobDetail;
