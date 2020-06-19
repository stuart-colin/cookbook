import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.jsonbin.io/',
  headers: {
    secret-key: 'Client-ID $2b$10$MBGTthiqCLERVMG0fjok6uI70jDdR5U/fcPYG4moJPKEBCCVuxoSO',
  },
});
