import {useEffect, useState} from 'react';

export default function LoginSignin (){

const [signin,setSignin] = useState("");
const [password,setPassword] = useState("");
const [login,setLogin] = useState("");
const [logpass,setLogpass] = useState("");
const [result,setResult] = useState("");
const [reslog,setResLog] = useState("");

let data="";
let listmail=[];
let mailcompare=[];
let logarray=[];


const preSignIn = () =>

{

    console.log(signin, password);
    getMail();
   


}
    

const signIn = () => 



{
   
    data = {signin,password};
    console.log(data,data!="");

   fetch
    
    (
        
        "http://localhost:3000/datas", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)}
        
    )

    // console.log("Success to post your email!"+JSON.stringify(data));
    alert("Welcome "+signin+" Success to post your email!"+JSON.stringify(data));
    setResult("Success to post your email!");
    setSignin('');setPassword('');

    


};




const handleChange = () =>

{
    
    console.log("ok submit");preSignIn();
  


};



const getMail = () =>


{

    fetch("http://localhost:3000/datas")
    .then(response =>  response.json())

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    .then(z => {console.log("");listmail=z;console.log(signin,password);console.log(listmail,listmail.length);
    
        // console.log(listmail.at(0).password,listmail.at(0).password==(password));

            // listmail.forEach(e => console.log(e.password==(password)));
    
            listmail.forEach(f => 
    
                    {
                    
                    // console.log(e.password==(password));
                    // console.log(f.signin,f.signin==(signin));
                    mailcompare.push(f.signin==(signin));
                
               
                
                });console.log(mailcompare.length,mailcompare.includes(true));
                if(mailcompare.includes(true)){errorMsg()} else {if(signin!=""){signIn()}else errorEmpty()}
            
            })

};
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const errorMsg = () =>

{
    // console.log("Cant have twice the same mail: "+signin);
    setResult("Cant have twice the same mail");

    // console.log("result: "+result);

    alert("Cant have twice the same mail: "+signin);
    setSignin('');setPassword('');


}


const errorEmpty = () =>

{

    // console.log("Cant submit a empty mail "+signin);
    setResult("Cant submit a empty mail");

    // console.log("result: "+result);

    alert("Cant submit a empty mail    "+signin);
    setSignin('');setPassword('');


}


const errorLog = () =>

{

    // console.log("Login and Password dont match with the database");

    // console.log("result: "+reslog);

    setResLog("Login and Password dont match with the database");
    setLogin('');setLogpass('');
   

}


const loGin = () =>

{

    fetch("http://localhost:3000/datas")
    .then(response =>  response.json())
    .then(z => {console.log("");logarray=z;console.log(login,logpass);console.log(logarray,logarray.length);
    
        // console.log(listmail.at(0).password,listmail.at(0).password==(password));

            // listmail.forEach(e => console.log(e.password==(password)));
    
////////////////////////////////////////////////////////////////////////////////////////////////////////

            // logarray.forEach((f,g) => 
    
            //         {
                    
            //         // console.log(f.signin,g.signin,f.password,g.password);
            //         // console.log(e.password==(password));
            //         // console.log(f.signin,f.signin==(signin));
            //         if((f.signin==(login))&&(f.password==(logpass)))
            //         {

            //             console.log(login,f.signin,logpass,f.password);
            //             console.log("You have successly access to the database!");
            //             setResLog("You have successly access to the database!");
            //             // setLogin("");    
            //             // setLogpass("");
            //             exit();
            //         alert("Welcome "+login+" You have successly access to the database!");

                    
            //         }

                    
            //          else {errorLog()};
                       
                
            //     });
             
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
            
    logarray.every(f => 
        
        {
            if((f.signin==(login))&&(f.password==(logpass)))
        
        {

            console.log(login,f.signin,logpass,f.password,f.id);
            setResLog("You have successly access to the database!");
           return false;

        }
        
     
        {errorLog()};
        // Make sure you return true. If you don't return a value, `every()` will stop.
        return true;
        
    
        });


            })

          

}



return (


    <div>
    <form>


    <label for="opinion"> SIGNIN UserName: </label><br /> 
      <textarea id="opinion" rows="1" cols="80" value={signin} onChange={e => setSignin((e.target.value))}></textarea>
      <br /> <br /> 
      <label for="opinion"> PassWord: </label><br /> 
      <textarea id="opinion" rows="1" cols="80" value={password} onChange={f => setPassword((f.target.value))} ></textarea>
      <br /> <br /> 
      
      
      <label for="opinion"> LOGIN UserName: </label><br /> 
      <textarea id="opinion" rows="1" cols="80" value={login} onChange={e => setLogin((e.target.value))}></textarea>
        <br /> <br /> 
        <label for="opinion"> PassWord: </label><br /> 
        <textarea id="opinion" rows="1" cols="80" value={logpass} onChange={f => setLogpass((f.target.value))} ></textarea>
        <br /> <br /> 

        
    </form>

    <button onClick={handleChange}>Send SIGNIN REQUEST</button> 
    <form>
    <label for="result"> SIGNIN result:  </label><br /> 
    <textarea id="opinion" rows="1" cols="80" value={result}></textarea>
    </form>
    <br /> <br /> 

    <button onClick={loGin}>Send LOGIN REQUEST</button>
    <form>
    <label for="result"> LOGIN result:  </label><br /> 
    <textarea id="opinion" rows="1" cols="80" value={reslog}></textarea>
    </form>

    </div>




    );




}