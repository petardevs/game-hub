import axios from "axios";

export default axios.create({
   baseURL: 'https://api.rawg.io/api',
   params: {
      key: 'bfc1249e824f4c099cdd01cba01589dd'
   }
})