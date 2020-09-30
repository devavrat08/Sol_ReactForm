import React,{Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import './form.css'
class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            mobileNo:'',
            UserLogin:{
                userId:'',
                userName:''
            }
        }  

        this.validator=new SimpleReactValidator({autoForceUpdate:this})
    }
 
    handleInputData=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    
    }

    setUserid=(e)=>{
        let userId=Object.assign({},this.state.UserLogin)
        userId.userId=e.target.value;
        this.setState({UserLogin:userId})
    }
   
    setUsername=(e)=>{
        let userName=Object.assign({},this.state.UserLogin)
        userName.userName=e.target.value;
        this.setState({UserLogin:userName})
    }
   

    handleFormData=(e)=>{
        e.preventDefault();
       if(this.validator.allValid()){
       let data={
           firstName:this.state.firstName,
           lastName:this.state.lastName,
           email:this.state.email,
           password:this.state.password,
           mobileNo:this.state.mobileNo,
           UserLogin:{
               userId:this.state.UserLogin.userId,
               userName:this.state.UserLogin.userName
           }
       };
       alert('thanks for registration')
       console.log(data);    
       }
       else{
           this.validator.showMessages();
           this.forceUpdate();
       }
    }

    render(){
        const style={
            marginTop:'10px'
        }
        return(
           <div className='container' style={style}>
               <div className="row">
                   <div className="col-md-8">
                       <form   onClick={this.handleFormData}>
                           <div className="form-group">
                               <input type='text' className='form-control' placeholder="enter firstname"
                               name='firstName'
                               onChange={this.handleInputData}
                               value={this.state.firstName}/>
                               {this.validator.message('firstname',this.state.firstName,'required|min:5')}
                           </div>
                           <div className="form-group">
                               <input type='text' className='form-control' placeholder="enter lastname"
                                name='lastName'
                                onChange={this.handleInputData}
                                value={this.state.lastName}/>
                                  {this.validator.message('lastname',this.state.lastName,'required|min:5')}
                           </div>
                           <div className="form-group">
                               <input type='email' className='form-control' placeholder="enter email"
                               name='email'
                               onChange={this.handleInputData}
                                value={this.state.email}/>
                                 
                           </div>
                           {this.validator.message('email',this.state.email,'required|email')}
                           <div className="form-group">
                               <input type='password' className='form-control' placeholder="enter password"
                                name='password'
                                onChange={this.handleInputData}
                                value={this.state.password}/>
                                  {this.validator.message('password',this.state.password,'required|min:5')}
                           </div>
                           <div className="form-group">
                               <input type='text' className='form-control' placeholder="enter mobile number"
                                name='mobileNo'
                                onChange={this.handleInputData}
                                value={this.state.mobileNo}/>
                                  {this.validator.message('mobileNo',this.state.mobileNo,'required|min:10|max:10')}
                           </div>
                           <div className="form-group">
                               <input type='text' className='form-control' placeholder="enter userid"
                              name='userId'
                              onChange={this.setUserid}
                                value={this.state.UserLogin.userId}/>
                                  {this.validator.message('userId',this.state.UserLogin.userId,'required')}
                           </div>
                           <div className="form-group">
                               <input type='text' className='form-control' placeholder="enter username"
                               name='userName'
                               onChange={this.setUsername}
                                value={this.state.UserLogin.userName}/>
                                  {this.validator.message('userName',this.state.UserLogin.userName,'required|min:5')}
                           </div>
                           <button type='submit' className='btn btn-danger btn-md'>Submit</button>
                       </form>
                   </div>
               </div>
           </div>
           
        )
    }
}

export default Form;