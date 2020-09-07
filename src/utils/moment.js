import moment from 'moment';
import 'moment/locale/pt-br';

// Formatando de forma simples as datas utilizadas no projeto, no formato PT-BR
const formatDate = (date) => {
  if (date == null) return null;

  return moment(date).format('DD/MM/YY');
};

export default formatDate;
