import React from 'react';

const UserCard = (props) =>{

    const {id,first_name,last_name,email,avatar}=props;

    return(
            
        <div className="container col-md-4 col-lg-3 col-9 my-3 mx-3">
            <div className="row justify-content-center">
                <div className="container box col-sm-7 col-md-11 col-lg-11 col-xl-9 col-11 rounded" style={{"backgroundColor":"#c29ffa"}}>
                    <div className="row justify-content-center">
                        <div className="row">
                            <figure className="d-flex justify-content-center my-3 mb-4">
                                <img className="image" width="110px" height="110px" src={avatar} alt={id}/>
                            </figure>    
                        </div>
                        <div className="col-md-10 col-10">
                            <div className="row">
                                <p className="h5 mb-3">{first_name} {last_name}</p>
                            </div>
                            <div className="row">
                                <p className="mb-4">{email}</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>    
        </div> 
    )
}

export default UserCard;