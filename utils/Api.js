import axios from 'axios'
import Url from './Url'

export default axios.create({
  baseURL: Url.BASE_PATH
});