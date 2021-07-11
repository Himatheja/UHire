import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 8,
    // backgroundColor: colors.light_orange,
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

const JobListItem = ({item, onJobItemClicked}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onJobItemClicked()}>
        <View style={styles.content}>
          <Text>
            <Text style={styles.boldText}>Title : </Text>
            {item.Job.Title}
          </Text>
          <Text style={styles.marginTop8}>
            <Text style={styles.boldText}>Date : </Text>
            {moment(item.Job.CreatedOnUtc).format('DD MMMM, YYYY')}
          </Text>
          <Text style={styles.marginTop8}>
            <Text style={styles.boldText}>Customer name : </Text>
            {item.Job.CustomerName}
          </Text>
          <Text style={styles.marginTop8}>
            <Text style={styles.boldText}>Status : </Text>
            {item.Job.StatusAsString}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

JobListItem.propTypes = {
  item: PropTypes.shape({
    Job: PropTypes.shape({
      CreatedOnUtc: PropTypes.any,
      CustomerName: PropTypes.any,
      StatusAsString: PropTypes.any,
      Title: PropTypes.any,
    }),
  }),
};

export default JobListItem;
