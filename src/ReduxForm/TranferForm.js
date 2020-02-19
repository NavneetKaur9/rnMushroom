import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const renderField = ({
  label,
  keyboardType,
  input: {name, onChange, ...restInput},
  placeholder,
  meta: {touched, error},
}) => {
  return (
    <View style={styles.renderField}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChange}
        {...restInput}
      />
      {touched && error && <Text style={styles.red}>{error}</Text>}
    </View>
  );
};

const renderTextArea = ({
  label,
  keyboardType,
  input: {name, onChange, ...restInput},
  placeholder,
  meta: {touched, error},
}) => {
  return (
    <View style={styles.renderField}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textArea}
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChange}
        multiline
        number="10"
        maxLength={255}
        {...restInput}
      />

      {touched && error && <Text style={styles.red}>{error}</Text>}
    </View>
  );
};

const validate = values => {
  let error = {};

  if (!values.notes) {
    error.notes = 'Required';
  } else if (values.notes.length === 255) {
    error.notes = 'Maximum character length 255';
  }

  if (!values.email) {
    error.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = 'Invalid email address';
  }

  if (!values.firstName) {
    error.firstName = 'Required';
  }

  if (!values.lastName) {
    error.lastName = 'Required';
  }

  if (!values.barCode) {
    error.barCode = 'Required';
  }

  return error;
};

const validateBarcode = value => (value ? undefined : 'Required');

class FormHeader extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.textColor}>X ambasaddors</Text>
        <Text style={styles.headerSecondaryText}>
          Fri • Nov 15, 2019 • 8:00 pm{' '}
        </Text>
      </View>
    );
  }
}

class TransferComponent extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <FormHeader />,
      headerStyle: {
        backgroundColor: '#262626',
      },
      headerTintColor: '#fff',
      headerRight: (
        <Button
          onPress={navigation.navigate('BasicForm')}
          title="+1"
          color="#fff"
        />
      ),
    };
  };

  state = {
    characterCount: 255,
    barCode: [{label: 'barcode-0'}],
  };

  addBarcode = () => {
    let {barCode} = this.state;
    barCode.push({label: 'barcode-' + barCode.length});

    this.setState({
      barCode,
    });
  };

  submit = values => {
    console.log('values::', values);
    alert(`Validation success. Values = ${JSON.stringify(values)}`);
  };

  onNotesChange = (event, newValue, previousValue, name) => {
    if (newValue.length <= 255) {
      this.setState({
        characterCount: 255 - newValue.length,
      });
    }
  };

  render() {
    const {handleSubmit, reset} = this.props;

    return (
      <View style={styles.formWrapper}>
        <ScrollView style={styles.scrollContainer}>
          <View>
            {this.state.barCode.map(item => {
              return (
                <Field
                  keyboardType="default"
                  label="Ticket Barcode: "
                  placeholder="Add Barcode"
                  name={item.label}
                  component={renderField}
                  validate={validateBarcode}
                />
              );
            })}

            {this.state.barCode.length < 7 && (
              <TouchableOpacity onPress={this.addBarcode}>
                <Text style={styles.addBarcodeBtn}>+ Add Barcode</Text>
              </TouchableOpacity>
            )}

            <View style={styles.parent}>
              <View style={[styles.fieldLength, styles.marginRight]}>
                <Field
                  keyboardType="default"
                  label="First Name* "
                  component={renderField}
                  placeholder="Enter First Name"
                  name="firstName"
                />
              </View>
              <View style={styles.fieldLength}>
                <Field
                  keyboardType="default"
                  label="Last Name* "
                  component={renderField}
                  placeholder="Enter Last Name"
                  name="lastName"
                />
              </View>
            </View>

            <Field
              keyboardType="email-address"
              label="Email* "
              component={renderField}
              placeholder="Enter Email Address"
              name="email"
            />

            <Field
              keyboardType="default"
              label="Notes"
              component={renderTextArea}
              placeholder="Enter Notes"
              name="notes"
              onChange={this.onNotesChange}
            />

            <Text style={styles.characterCount}>
              {' '}
              {this.state.characterCount}
            </Text>
          </View>
        </ScrollView>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={reset}
            style={[styles.btn, styles.cancelBtn]}>
            <Text style={[styles.textCenter, styles.textColorBlue]}>
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSubmit(this.submit)}
            style={[styles.btn, styles.submitBtn]}>
            <Text style={[styles.textCenter, styles.textColorWhite]}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formWrapper: {
    marginVertical: 7,
    flex: 1,
  },
  label: {
    height: 18,
    // fontFamily: "Averta",
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    color: '#262626',
  },
  textInput: {
    height: 44,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#999999',
    padding: 12,
    marginTop: 3,
  },
  textArea: {
    height: 138,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#999999',
    padding: 12,
  },
  addBarcodeBtn: {
    alignSelf: 'flex-end',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#026cdf',
    marginTop: 14.5,
  },
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 29.5,
  },
  characterCount: {
    textAlign: 'right',
    color: '#8f9296',
  },
  renderField: {
    // flexDirection: 'row',
    // height: 50,
    // alignItems: 'center',
    marginTop: 15,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
    height: 50,
  },
  btn: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderRadius: 2,
    borderColor: '#026cdf',
  },
  cancelBtn: {},
  submitBtn: {
    backgroundColor: '#026cdf',
    color: '#fff',
    marginLeft: 24,
  },
  textCenter: {
    textAlign: 'center',
  },
  textColorBlue: {
    color: '#026cdf',
  },
  textColorWhite: {
    color: '#fff',
  },
  fieldLength: {
    flex: 1,
  },
  marginRight: {
    marginRight: 24,
  },
  red: {color: 'red'},
  scrollContainer: {flex: 1, paddingHorizontal: 16, marginBottom: 50},
});

export default reduxForm({
  form: 'transferticketform', // a unique identifier for this form
  validate,
})(TransferComponent);
