import React, { Component } from 'react';
import Cookies from 'universal-cookie'
import {fetchData, insertData, updateData, deleteRecord } from '../../api/fertilizer'
import {insertData as insertNutrient} from '../../api/nutrient'
import StickyHeadTable from './tb'
import SimpleModal from './modal'
import {SimpleButton} from './button'
import swal from 'sweetalert'
const cookie = new Cookies()


export default class Fertilizer extends Component {
    state = {
        fertilizers: [],
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
            text: `Ha ${action} el fertilizante exitosamente`,
            icon: 'success',
            timer: 2000, 
            buttons: false
        })
    }

    handleConfirmDialog = async (_id) => {
        await swal({
            title: "¿Estás seguro?",
            text: "Una vez eliminado, el fertilizante no se podrá recuperar",
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
        const fertilizer = await this.state.fertilizers.find(i => i._id === _id)
        if (fertilizer){
            const form = {
                name: fertilizer.name, 
                nitrogen: fertilizer.nutrient ? fertilizer.nutrient.nitrogen : null, 
                phosphorus: fertilizer.nutrient ? fertilizer.nutrient.phosphorus : null, 
                potassium: fertilizer.nutrient ? fertilizer.nutrient.potassium : null, 
                sulfur: fertilizer.nutrient ? fertilizer.nutrient.sulfur : null, 
                calcium: fertilizer.nutrient ? fertilizer.nutrient.calcium : null, 
                magnesium: fertilizer.nutrient ? fertilizer.nutrient.magnesium : null,
            }
            await this.setState({_id: fertilizer._id})
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
            return window.location.href = '/'
        }else{
            if (cookie.get('role') !== 'true'){
                return this.props.history.push('./')
            }
        }
        this.tableUpdate()
        //console.log(fetchedfertilizers)
    }

    async tableUpdate(){
        const fetchedfertilizers = await fetchData();
        this.setState({fertilizers: fetchedfertilizers})
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
        return (
            (cookie.get('id')) ? (
                <div>
                    <h1 className="page-header">Fertilizantes</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <SimpleModal data={this.state.form} handleChange={this.handleChange} dataEntry={this.dataEntry} open={this.state.open} handleClose={this.handleClose}/>
                            <SimpleButton handleOpen={this.handleOpen} />
                            <StickyHeadTable data={this.state.fertilizers} handleChange={this.handleChange} form={this.state.form} handleOpen={this.handleOpen} confirmDialog={this.handleConfirmDialog} /> 
                        </div>
                    </div>
                </div>
            ) : null
        )
    }
}
