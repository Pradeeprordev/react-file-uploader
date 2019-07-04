import React from 'react';
import axios from 'axios';
import { TablePage } from '../table/table_page';
import './uploader_form.css';
import { Form, Button } from 'semantic-ui-react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {API_BASE_URL} from '../constants';
toast.configure()

class UploaderPage extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: ''
      }
      this.state.users = []
  }

  componentDidMount(){
    axios.get(API_BASE_URL+'/api/v1/users')
    .then(json =>
      this.setState({
        users: json.data
      })
    )
  }

  onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  onSubmitHandler = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    axios.post(API_BASE_URL+"/api/v1/users/import_data", data, { // receive two parameter endpoint url ,form data
    })
    .then(res => { // then print response status
      if (res.status === 200){
        toast.success("Successfully uploaded")
        axios.get(API_BASE_URL+'/api/v1/users')
        .then(json =>
          this.setState({
            users: json.data
          })
        )
      }
    })
  }

  render() {
    return (
      <div className="form-table-container">
        <Form className='form-style' onSubmit={this.onSubmitHandler}>
          <Form.Group inline>
          <Form.Field>
            <input type='file' name="file" placeholder='First Name' onChange={this.onChangeHandler} accept=".xlsx" required />
          </Form.Field>
           <Button type='submit' primary>Upload File</Button>
          </Form.Group>
        </Form>
        <TablePage users={this.state.users}/>
      </div>
    );
  }
}

export { UploaderPage };
