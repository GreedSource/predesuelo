// ####################################################################################################################################
import axios from 'axios'

// ####################################################################################################################################
   //const url = 'http://localhost:3700/api/auth/'
   const url = 'https://api-predesuelo.herokuapp.com/api/auth/'

// ####################################################################################################################################
   export {
      fetchData
   }

// ####################################################################################################################################

   async function fetchData(form){ // ===============================================================================

      try {
         const {data} = await axios.post(`${url}login`, form)
         const modifiedData = {
            id:         data.id, 
            name:       data.name,
            username:   data.username, 
            token:      data.token,
            role:       data.role ? data.role : null
         }

         return modifiedData
      } catch (error) {
         console.log(error)
      }
   }

// ####################################################################################################################################