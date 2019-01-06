import React, { Component } from 'react';
import {
    Paper,
    Typography,
    TextField,
    Button
} from '@material-ui/core'


class Login extends Component {

    constructor(props) {
        super(props);
        this.classes ={
            button:'butt',
            input:'inp'
        }
        this.state = {
        };
    };

    static defaultProps = {
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }


    render() {
        return (
        <div>
            <div>
                <Button type='submit'color='primary' variant='raised'>
                    Create
                 </Button>
            </div>
            
      <Button variant="contained" >
        Default
      </Button>
      <Button variant="contained" color="primary" >
        Primary
      </Button>
      <Button variant="contained" color="secondary" >
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons" >
        Link
      </Button>
      <input
        accept="image/*"
        
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" >
          Upload
        </Button>
      </label>
    </div>
        
        );
            
            
            
            
            
            
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }

    componentDidCatch(error, info) {
    }
}

export default Login;
// export default withStyles(styles)(Login);
