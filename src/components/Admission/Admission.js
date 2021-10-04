import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faDownload } from '@fortawesome/free-solid-svg-icons'
import './Admission.css'

const Admission = () => {
    return (

        <div className="container py-5 my-5">
            <h3>UNDERGRADUATE ADMISSION NOTICE</h3>
            <Table striped bordered hover>
                <thead >
                    <tr>
                        <th >SL</th>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody className="border-table">
                    <tr>
                        <td>1</td>
                        <td><FontAwesomeIcon className="icon-color" icon={faCalendar} /> 20.10.2021</td>
                        <td>Application Manual </td>
                        <td className="icon-color"><FontAwesomeIcon icon={faDownload} />Download</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><FontAwesomeIcon className="icon-color" icon={faCalendar} /> 20.10.2021</td>
                        <td>Admission Notice 2020-21</td>
                        <td className="icon-color"><FontAwesomeIcon icon={faDownload} />Download</td>
                    </tr>
                    <tr>
                       <td>3</td>
                        <td><FontAwesomeIcon className="icon-color" icon={faCalendar} /> 20.10.2021</td>
                        <td>Admission Guideline</td>
                        <td className="icon-color"><FontAwesomeIcon icon={faDownload} />Download</td>
                    </tr>
                </tbody>
            </Table>
        </div>

    );
};

export default Admission;