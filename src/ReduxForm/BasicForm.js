import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

/*=========================================
          Field -level Validation
=========================================*/
const required = value => (value ? undefined : 'Required');
const maxLength15 = value =>
  value && value.length > 15 ? 'Must be 15 characters or less' : undefined;
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);
const isValidEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

/*=========================================
              Field-level Warning
  =========================================*/
const over70YearsOld = value =>
  value && value > 70 ? 'You might be too old for using this' : undefined;
const isYahooMail = value =>
  value && /.+@yahoo\.com/.test(value)
    ? 'Really? You still use yahoo mail ?'
    : undefined;

/*=========================================
            Validation
=========================================*/

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 20) {
    errors.username = 'username must be less than or equal 20 characters';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Age must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'You must be at least 18 years old';
  }
  return errors;
};
const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'You seem a bit young...';
  }
  return warnings;
};

const renderField = ({
  label,
  keyboardType,
  meta: {touched, error, warning},
  input: {onChange, ...restInput},
}) => {
  return (
    <View style={styles.fieldContainer}>
      <View style={styles.renderField}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.textInput}
          keyboardType={keyboardType}
          onChangeText={onChange}
          {...restInput}
        />
      </View>
      {touched &&
        ((error && <Text style={styles.red}>{error}</Text>) ||
          (warning && <Text style={styles.orange}>{warning}</Text>))}
    </View>
  );
};

class BasicForm extends React.Component {
  static navigationOptions = {
    title: 'Redux-form example',
  };

  submit = values => {
    console.log('values::', values);

    alert(`Validation success. Values = ~${JSON.stringify(values)}`);
  };

  render() {
    const {handleSubmit} = this.props;
    return (
      <View style={styles.formWrapper}>
        <Field
          name="username"
          keyboardType="default"
          label="Username: "
          component={renderField}
          validate={[required, maxLength15]}
        />
        <Field
          name="email"
          keyboardType="email-address"
          label="Email: "
          component={renderField}
          validate={[isValidEmail]}
          warn={[isYahooMail]}
        />
        <Field
          name="age"
          keyboardType="numeric"
          label="Age: "
          component={renderField}
          validate={[number, minValue18]}
          warn={[over70YearsOld]}
        />
        <TouchableOpacity
          onPress={handleSubmit(this.submit)}
          style={styles.btnContainer}>
          <Text style={styles.submitBtn}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  renderField: {flexDirection: 'row', height: 50, alignItems: 'center'},
  label: {fontSize: 14, fontWeight: 'bold', width: 80},
  textInput: {
    borderColor: 'steelblue',
    borderWidth: 1,
    height: 37,
    width: 220,
    padding: 5,
  },
  formWrapper: {
    flex: 1,
    flexDirection: 'column',
    margin: 40,
    justifyContent: 'flex-start',
  },
  btnContainer: {margin: 10, alignItems: 'center'},
  submitBtn: {
    backgroundColor: 'steelblue',
    color: 'white',
    fontSize: 16,
    height: 37,
    width: 200,
    textAlign: 'center',
    padding: 10,
  },
  fieldContainer: {
    flexDirection: 'column',
    height: 70,
    alignItems: 'flex-start',
  },
  red: {color: 'red'},
  orange: {color: 'orange'},
});

export default reduxForm({
  form: 'basicForm', // a unique identifier for this form
  // validate, // <--- validation function given to redux-form
  // warn,
})(BasicForm);
