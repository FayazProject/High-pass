import JustValidate from 'just-validate';

const form1 = document.querySelector('.js-form1')
const email1 = document.querySelector('.js-email1')

const validate1 = new JustValidate(form1, {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #F06666',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#F06666',
  },
  focusInvalidField: true,
  lockForm: true,
});

validate1
.addField(email1, [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели e-mail',
  },
  {
    rule: 'email',
    errorMessage: 'Недопустимый формат',
  },
]);

const form2 = document.querySelector('.js-form2')
const email2 = document.querySelector('.js-email2')

const validate2 = new JustValidate(form2, {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #FF3030',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#FF3030',
  },
  focusInvalidField: true,
  lockForm: true,
});

validate2
.addField(email2, [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели e-mail',
  },
  {
    rule: 'email',
    errorMessage: 'Недопустимый формат',
  },
]);
