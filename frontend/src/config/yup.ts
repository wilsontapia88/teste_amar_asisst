import * as yup from 'yup';

yup.setLocale({
  mixed: {
    default: 'Não é válido',
    required: 'Este campo é obrigatório',
    oneOf: 'Deve ser um dos seguintes valores: ${values}',
    notOneOf: 'Não deve ser um dos seguintes valores: ${values}',
    defined: 'Deve estar definido',
    notNull: 'Não pode ser nulo',
    notType: 'Deve ser do tipo ${type}',
  },
  string: {
    length: 'Deve ter exatamente ${length} caracteres',
    min: 'Deve ter pelo menos ${min} caracteres',
    max: 'Deve ter no máximo ${max} caracteres',
    email: 'Deve ser um e-mail válido',
    url: 'Deve ser uma URL válida',
    trim: 'Não deve conter espaços no início ou no final',
    lowercase: 'Deve estar em minúsculas',
    uppercase: 'Deve estar em maiúsculas',
    matches: 'Deve corresponder ao seguinte padrão: "${regex}"',
  },
  number: {
    min: 'Deve ser maior ou igual a ${min}',
    max: 'Deve ser menor ou igual a ${max}',
    lessThan: 'Deve ser menor que ${less}',
    moreThan: 'Deve ser maior que ${more}',
    positive: 'Deve ser um número positivo',
    negative: 'Deve ser um número negativo',
    integer: 'Deve ser um número inteiro',
  },
  date: {
    min: 'Deve ser posterior a ${min}',
    max: 'Deve ser anterior a ${max}',
  },
  array: {
    min: 'Deve ter pelo menos ${min} elementos',
    max: 'Deve ter no máximo ${max} elementos',
  },
});
