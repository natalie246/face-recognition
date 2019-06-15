import React from 'react';

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            name:''

        }
    }

    onEmailChange = (event) =>{
        this.setState({email:event.target.value})
    }

    onNameChange = (event) =>{
        this.setState({name:event.target.value})
    }

    onPasswordChange = (event) =>{
        this.setState({password:event.target.value})
    }

    onSubmitRegister = (event) =>{

        console.log(this.state)
        fetch('https://salty-mountain-13574.herokuapp.com/register',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password,
                name:this.state.name,
            })
        }).then(response=>response.json())
            .then(user=>{
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');

                }
            })
    }

    render(){

        const  {onRoureChange} = this.props;
        return (
            <article className="pa4 br3  ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       onChange={this.onNameChange}
                                       type="text" name="name" id="name"/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       onChange={this.onEmailChange}
                                       type="email" name="email-address" id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       onChange={this.onPasswordChange}
                                       type="password" name="password" id="password"/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                   type="submit" value="Register"/>
                        </div>

                    </div>
                </main>
            </article>
        )
    }
}
// = ({onRouteChange}) =>{



export default Register;
