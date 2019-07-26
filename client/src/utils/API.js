import axios from 'axios';

const ajax = axios.create({
  headers: {
    'Content-type': 'application/json'
  }
});

export default {
  getIEPDetail: function(query) {
    return ajax.get('/api/inspection/iepdata/' + query);
  },

  getSavedIEP: function() {
    return ajax.get('/api/inspection/');
  },

  getSavedIEPName: function(query) {
    return ajax.get('/api/inspection/name/' + query);
  },
  // deleteBook: function(id) {
  //     return ajax.delete(`/api/books/${id}`);
  // },

  saveForm: function(data) {
    console.log(data); //this.state is making it here!
    return ajax.post('/api/inspection/save', data);
  }
};
