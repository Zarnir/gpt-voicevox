import axios from 'axios';

export const ajax = async(
  data,
  url,
  method,
) => await axios({
  data,
  url,
  method,
})