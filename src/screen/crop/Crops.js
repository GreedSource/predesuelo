import React, { Component } from 'react';
import Layout from '../Layout';
import Cookies from 'universal-cookie'
import {fetchCrops as fetchData, insertData, updateData, deleteRecord } from '../../api/crop'
import {insertData as insertNutrient} from '../../api/nutrient'
import StickyHeadTable from './tb'
import SimpleModal from './modal'
import {SimpleButton} from './button'
import swal from 'sweetalert'
const cookie = new Cookies()


export default class Crops extends Component {
    state = {
        crops: [],
        _id: '',
        form: {
            name : '',
            nitrogen: '', 
            phosphorus: '', 
            potassium : '', 
            sulfur : '', 
            calcium : '', 
            magnesium: ''
        },
        open: false
    }

    handleOpen = async (_id) => {
        await this.setState({open: true});
        //console.log(this.state.open)
        if(_id){
            await this.handleEdit(_id)
        }else{
            const form = {
                name: '', 
                nitrogen: null, 
                phosphorus: null, 
                potassium: null, 
                sulfur: null, 
                calcium: null, 
                magnesium: null,
            }
            await this.setState({_id: null})
            await this.setState({form: form})
        }
    };

    handleAlertDialog = (action) => {
        swal({
            title: 'Exito',
            text: `Ha ${action} el cultivo exitosamente`,
            icon: 'success',
            timer: 2000, 
            buttons: false
        })
    }

    handleConfirmDialog = async (_id) => {
        await swal({
            title: "¿Estás seguro?",
            text: "Una vez eliminado, el cultivo no se podrá recuperar",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
        .then(async (willDelete) => {
            if (willDelete) {
              const status = await deleteRecord(_id)
              if(status){
                swal("El registro ha sido eliminado", {
                    icon: "success",
                    timer: 2000, 
                    buttons: false
                });
                this.tableUpdate()
              }else{
                this.errorDialog()
              }
            } else {
                swal("Se ha cancelado la operación",{
                    icon: 'warning',
                    timer: 2000, 
                    buttons: false
                });
            }
        });
    }

    errorDialog = () => {
        swal("Algo ha salido mal", {
            icon: "error",
            timer: 2000, 
            buttons: false
        });
    }

    warningDialog = () => {
        swal("Se ha cancelado la operación", "No deje campos vacios", {
            icon: 'warning',
            timer: 2000, 
            buttons: false
        });
    }

    handleEdit = async (_id) => {
        const crop = await this.state.crops.find(i => i._id === _id)
        if (crop){
            const form = {
                name: crop.name, 
                nitrogen: crop.nutrient ? crop.nutrient.nitrogen : null, 
                phosphorus: crop.nutrient ? crop.nutrient.phosphorus : null, 
                potassium: crop.nutrient ? crop.nutrient.potassium : null, 
                sulfur: crop.nutrient ? crop.nutrient.sulfur : null, 
                calcium: crop.nutrient ? crop.nutrient.calcium : null, 
                magnesium: crop.nutrient ? crop.nutrient.magnesium : null,
            }
            await this.setState({_id: crop._id})
            await this.setState({form: form})
            //console.log(this.state.form)
        }
    }

        handleClose = async () => {
        await this.setState({open: false});
        //console.log(this.state.open)
    };

    handleChange = async e => {
        //await console.log(e)
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    async componentDidMount() {
        if (!cookie.get('id')){
            window.location.href = './'
        }else{
            if (cookie.get('role') !== 'true'){
                window.location.href = './sample'
            }
        }
        this.tableUpdate()
        //console.log(fetchedCrops)
    }

    async tableUpdate(){
        const fetchedCrops = await fetchData();
        this.setState({crops: fetchedCrops})
    }


    dataEntry =  async () => {
        if(!this.state._id){
            if(this.validateForm()){
                const name = {name: this.state.form.name}
                const fetchedData = await insertData(name)
                if (fetchedData){
                    await insertNutrient(this.state.form, fetchedData.id)
                    this.handleAlertDialog('añadido')
                }else{
                    this.errorDialog()
                }
            }else{
                this.warningDialog()
            }
            //await console.log(this.validateForm())
        }else{
            if(this.validateForm()){
                const fetchedData = await updateData(this.state.form, this.state._id)
                if (fetchedData){
                    await insertNutrient(this.state.form, fetchedData)
                    this.handleAlertDialog('actualizado')
                }else{
                    this.errorDialog()
                }
            }else{
                this.warningDialog()
            }
        }
        //console.log(fetchedData)
        this.tableUpdate()
    }

    validateForm = () =>{
        const data = this.state.form
        let valid = true
        Object.entries(data).every(([key, value]) => {
            if(value || value === 0){
                return true
            }else{
                valid = false
                return valid
            }
        });
        return valid
    }
    
    render() {
        const view = (
            <div>
                <SimpleModal data={this.state.form} handleChange={this.handleChange} dataEntry={this.dataEntry} open={this.state.open} handleClose={this.handleClose}/>
                <SimpleButton handleOpen={this.handleOpen} />
                <StickyHeadTable data={this.state.crops} handleChange={this.handleChange} form={this.state.form} handleOpen={this.handleOpen} confirmDialog={this.handleConfirmDialog} />
            </div>
        )
        return (
            <div>
                <Layout component={view} title={`Crops list`}></Layout>
            </div>
        )
    }
}
