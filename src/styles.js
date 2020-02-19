import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
  },
  text: {
    textShadowColor: '#ff00ff',
    color: '#ff00ff',
  },
  imgDimensions: {width: 30, height: 30},
  logoBg: {backgroundColor: '#816db5'},
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  mainContainer: {
    flex: 1,
    margin: 10,
  },
  primaryEventText: {
    color: '#262626',
    fontSize: 16,
    marginBottom: 4,
    lineHeight: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryEventText: {
    margin: 4,
    marginBottom: 12,
    textAlign: 'center',
    color: 'rgba(38, 38, 38, 0.65)',
  },
  tranferDetailRow: {
    borderTopColor: '#e3e4e5',
    borderTopWidth: 1,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    color: '#262626',
    fontSize: 14,
    lineHeight: 20,
    // flex: 1,
  },
  detailValue: {
    textAlign: 'right',
    fontSize: 14,
    color: 'rgba(38, 38, 38, 0.65)',
  },
  detailSection: {flex: 1, flexDirection: 'column'},
  cancelTranferBtn: {
    flex: 1,
    height: 30,
    // width: 30,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    // alignSelf: 'flex-end',
  },
  cancelTransferText: {
    height: 44,
    // width: 'auto',
    backgroundColor: '#006CDF',
    padding: 10,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 20,
  },
  textColor: {
    color: '#ffffff',
    textAlign: 'center',
  },
  headerSecondaryText: {
    fontSize: 10,
    color: '#ffffff',
  },
});
