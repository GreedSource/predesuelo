import React, { Component } from 'react';
import Cookies from 'universal-cookie'
import {fetchSamples, insertData, updateData, deleteRecord} from '../../api/samples'
import {fetchCrops} from '../../api/crop'
import StickyHeadTable from './tb'
import SimpleModal from './modal'
import {SimpleButton} from './button'
import swal from 'sweetalert'
const cookie = new Cookies()


export default class Sample extends Component {
    state = {
        samples: [],
        crops: [],
        _id: '',
        form: {
            crop : '',
            nitrogen: '', 
            phosphorus: '', 
            potassium : '', 
            sulfur : '', 
            calcium : '', 
            magnesium: ''
        },
        open: false,
        show: true
    }

    handleOpen = async (_id) => {
        await this.setState({open: true});
        //console.log(this.state.open)
        if(_id){
            await this.handleEdit(_id)
        }else{
            const form = {
                crop: null, 
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
            text: `Ha ${action} la muestra exitosamente`,
            icon: 'success',
            timer: 2000, 
            buttons: false
        })
    }

    handleConfirmDialog = async (_id) => {
        await swal({
            title: "¿Estás seguro?",
            text: "Una vez eliminada, la muestra no se podrá recuperar",
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
        const sample = await this.state.samples.find(i => i._id === _id)
        if (sample){
            const form = {
                crop: sample.crop._id, 
                nitrogen: sample.nitrogen, 
                phosphorus: sample.phosphorus, 
                potassium: sample.potassium, 
                sulfur: sample.sulfur, 
                calcium: sample.calcium, 
                magnesium: sample.magnesium,
            }
            await this.setState({_id: sample._id})
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
        }
        const fetchedCrops = await fetchCrops();
        this.setState({crops: fetchedCrops})
        this.tableUpdate()
    }

    async tableUpdate(){
        const fetchedSamples = await fetchSamples();
        this.setState({samples: fetchedSamples})
    }


    dataEntry =  async () => {
        if(!this.state._id){
            if(this.validateForm()){
                const status = await insertData(this.state.form)
                if (status){
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
                const status = await updateData(this.state.form, this.state._id)
                if (status){
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
            <div>
                <h1 className="page-header">Samples</h1>
                <div className="row">
                    <div className="col-md-12">
                        <SimpleModal data={this.state.form} handleChange={this.handleChange} dataEntry={this.dataEntry} crops={this.state.crops} open={this.state.open} handleClose={this.handleClose}/>
                        <SimpleButton handleOpen={this.handleOpen} />
                        <StickyHeadTable data={this.state.samples} history={this.props.history} handleChange={this.handleChange} crops={this.state.crops} form={this.state.form} handleOpen={this.handleOpen} confirmDialog={this.handleConfirmDialog} />
                    </div>
                </div>
            </div>
        )
    }
}
