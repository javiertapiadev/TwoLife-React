import { Form } from "react-bootstrap"
import '../css/RequestFilter.css'

function RequestFilter({filters}){
  return(
  <div className='filters'>
    <div className='header'>
      <h1>Filtar por</h1>
    </div>
    <div className='body'>
      
      <div key='default-checkbox' className="mb-3">
        <Form.Check 
          type='checkbox'
          id='default-checkbox'
          label='Usuario'
        />
      </div>
      <div key='default-checkbox' className="mb-3">
        <Form.Check 
          type='checkbox'
          id='default-checkbox'
          label='Anuncio'
        />
      </div>
      <div key='default-checkbox' className="mb-3 d-flex flex-column">
        <Form.Check 
            type='checkbox'
            id='default-checkbox'
            label='Fecha Solicitada'
          />
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control type="date" placeholder="Enter email" />
          <Form.Label>al</Form.Label>
          <Form.Control type="date" placeholder="Enter email" />
        </Form.Group>
      </div>
      <div key='default-checkbox' className="mb-3">
        <Form.Check 
            type='checkbox'
            id='default-checkbox'
            label='Status'
          />
        
        <Form.Select aria-label="Default select example">
          <option>Seleccione status</option>
          <option value="Aceptada">Aceptada</option>
          <option value="En espera">En espera</option>
          <option value="Negada">Negada</option>
        </Form.Select>
      </div>
      
    </div>
  </div>
  )
}

export default RequestFilter