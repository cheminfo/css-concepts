import React, { Component } from 'react';
import './App.css';
import {MF} from 'react-mf'
import Container from './Container'
import {StructureEditor} from 'react-ocl'
import data from './data.json'
import * as OCL from 'openchemlib/full'
import RichTextEditor from 'react-rte'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Mediaquery from 'react-responsive'

const code = data.$content.products[0].code
const mf = data.$content.products[0].mf
const mw = data.$content.products[0].mw
const em = data.$content.products[0].em

const columns = [{
    Header: 'code',
    accessor: 'code'
    }, {
        Header: 'mf',
        accessor: 'mf'
    }, {
        Header: 'mw',
        accessor: 'mw'

    }]




class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mf: mf,
            oclid: '',
            value: RichTextEditor.createEmptyValue(),
            mw: mw,
            em: em
        }
    }
    changeMF(test) {
        this.state= {
            mf: test
        };
    }
    onChange(event) {
        const mol = OCL.Molecule.fromSmiles(event.target.value)
        this.setState({oclid: idAndCoordinatesToString(mol.getIDCodeAndCoordinates())})
    }

    handleStructureChange(newStructure) {
        if (!newStructure) return
        this.setState({oclid: newStructure.oclid + ' ' + newStructure.coordinates})
    }

    render() {
        // const oclid = this.state.oclid
        // const mol = OCL.Molecule.fromIDCode(oclid)
        const group = (<div className="group">
            <Container title="Molecular Formula" className="children">
                <MF mf={this.state.mf}/>
            </Container>
            <Container title="Molecular Weight" className="children">
                <div>{this.state.mw}</div>
            </Container>
            <Container title="Molecular electron microscopy" className="children">
                <div>{this.state.em}</div>
            </Container>
        </div>)

        return (
            <div className="content">
                <div className="main">
                    <Container title="OCL Module">
                        <StructureEditor  OCL={OCL} onChange={this.handleStructureChange.bind(this)} oclid={this.state.oclid}/>
                    </Container>
                    <Mediaquery query="(max-width: 1000px)"> {group}  </Mediaquery>
                    <Container title="Table" className="table">
                        <ReactTable columns={columns} data={tableData}/>
                    </Container>
                    <Container title="Rich text editor">
                        <RichTextEditor value={this.state.value}/>
                    </Container>
                </div>
                <Mediaquery query="(min-width: 1000px)"> {group} </Mediaquery>
            </div>

        );
    }
}

export default App;

// Imported code
function idAndCoordinatesToString(idAndCoordinates) {
    if (idAndCoordinates.coordinates) {
        return idAndCoordinates.idCode + ' ' + idAndCoordinates.coordinates;
    } else {
        return idAndCoordinates.idCode;
    }
}

// test data
const tableData = [
        {
            code: code,
            mf: mf,
            mw: mw
        }
    ]
