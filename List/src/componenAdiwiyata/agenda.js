import React, { Component } from 'react'
import MyNav from './mynav'
import MyBox from './box'
import MyAgenda from './myagenda'

class Agenda extends Component{
    bind = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    SaveAgenda = (event) => {
        event.preventDefault()
        let temp = this.state.agenda

        if (this.state.action==="insert") {
            temp.push({
                tanggal: this.state.tanggal,
                event: this.state.event
            })
        }else if (this.state.action === "update") {
            let index = temp.findIndex(item => item.id === this.state.id)
            temp[index].tanggal = this.state.tanggal
            temp[index].event = this.state.event
        }

        this.setState({agenda:temp})
    }

    Add = () => {
        this.setState({
            tanggal: "",
            event: "",
            action: "insert"
        })
    }

    Edit = (item) => {  
        this.setState({
            id: item.id,
            tanggal: item.tanggal,  
            event: item.event,  
            action: "update"  
        });  
      }  

    Drop = (index) => {    
        let temp = this.state.agenda;  
        temp.splice(index,1);  
        this.setState({siswa: temp});  
      } 

    constructor(){
        super()
        this.state = {
            agenda: [
                {id:"1", event: "Hari bumi", tanggal: "21 Mei 2020"},
            ],
            id: "",
            event: "",
            tanggal: "",
            action:""
        }
    }

    render(){
        return(
            <div>
                <div className="row">
                    <MyBox type="col-md-6 mx-auto" >
                        <h3 className="text-center">
                            AGENDA
                        </h3>
                    </MyBox>
                </div>
                    <MyBox type="col-md-8 mx-auto">
                            {this.state.agenda.map((item,index) => {
                                return(
                                    <li className="list-group" key={index}>
                                        <MyAgenda title={item.tanggal} agenda={item.event}>
                                            <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}data-toggle="modal" data-target="#modal">
                                                Edit
                                            </button>
                                            <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>
                                                Hapus
                                            </button>
                                        </MyAgenda>
                                        <br></br>
                                    </li>
                                )
                            })}
                        <button className="btn btn-sm btn-success m-3" onClick={this.Add}data-toggle="modal" data-target="#modal">
                            Tambah Data
                        </button>
                    </MyBox>

                    {/* MODAL FORM */}
                    <div className="modal fade" id="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-success text-white">
                                <h5>Form Agenda</h5>
                            </div>
                            <form onSubmit={this.SaveAgenda}>
                                <div className="modal-body">
                                    No
                                    <input type="text" name="id" className="form-control" value={this.state.id} />
                                    Tanggal
                                    <input type="text" name="tanggal" className="form-control" onChange={this.bind} value={this.state.tanggal} />
                                    Event
                                    <input type="text" name="event" className="form-control" onChange={this.bind} value={this.state.event} />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Simpan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Agenda