// ####################################################################################################################################
import React from 'react'
import {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CropPicker.module.css'
import {fetchCrops} from '../../api/samples'

// ####################################################################################################################################

const CropPicker = ({handleCropChange}) => {

   const [fetchedCrops, setFetchedCrops] = useState([])

   //const resultado = fetchedCrops.find(crop => crop._id === e.target.value)
   
   useEffect(() => {
      const fetchAPI = async () => {
         setFetchedCrops(await fetchCrops())
      }

      fetchAPI()
   }, [setFetchedCrops])
   //
   return (
      <div className={styles.container}>
         <FormControl className={styles.formControl}>
            <NativeSelect name="_id" defaultValue="" onChange={(e) => handleCropChange(e.target.value)}>
               <option value="">Global</option>
               {fetchedCrops.map((crop, i) => <option key={i} value={crop._id}>{i+1} - {crop.crop.name}</option>)}
            </NativeSelect>
         </FormControl>
      </div>
   )
}

// ####################################################################################################################################

export default CropPicker

// ####################################################################################################################################