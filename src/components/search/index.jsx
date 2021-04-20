import axios from "axios";
import React, { useState } from 'react';
//import React, { Component } from "react";
import "./search.css";
import { makeStyles } from '@material-ui/core/styles';

import RecipeReviewCard from "../card/index"
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',

  },
  
});

function App(props) {
    const classes = useStyles();
    const formData = new FormData();
    // Initially, no file is selected
    //selfile: null
    const [fin, setFin] = useState([]);
    const[selfile,setSelfile]=useState(null);
    const[str, setStr]=useState("");
    const text_search = (query) => {
    //    var aks=[];
    console.log(query);
    const request = require("request");
    request.get(
      {
        url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
        headers: {
          "X-Api-Key": "IvocvEFKL6QxwxtZC1WPIT2AofJlV4JS3ctsE6Ng",
        },
      },

      (error, response, body) => {
        if (error) return console.error("Request failed:", error);
        else if (response.statusCode !== 200)
          return console.error(
            "Error:",
            response.statusCode,
            body.toString("utf8")
          );
        else {
          //         aks.push(body);
          
          console.log("hi");
          var obj = JSON.parse(body).items;
        
        
          
          let fin1 = [];
          for (let i = 0; i < obj.length; i++) {
            var obj1 = {};
            obj1["cal"] = obj[i]["calories"];
            obj1["fat"] = obj[i]["fat_total_g"];
            obj1["sod"] = obj[i]["sodium_mg"];
            obj1["carbo"] = obj[i]["carbohydrates_total_g"];
            obj1["fibre"] = obj[i]["fiber_g"];
            obj1["prot"] = obj[i]["protein_g"];
            obj1["name"] = obj[i]["name"];
            fin1.push(obj1);
          }
          if(fin1.length===0)
          {
            alert("Invalid Input")
          }
          //console.log(this.state);
          console.log(fin1);
         // this.setState({ selfile: this.state.selfile, fin: fin1 });
          setFin(fin1);
        }

      }
    );
  };

 
 const onFileUpload = () => {

    
    formData.append(
      "image",
      selfile,
      selfile.name
    );
    //console.log(selfile);

    const api =
      "https://api.logmeal.es/v2/recognition/dish/v0.8?skip_types=%5B1%2C3%5D&language=eng";
    const token = "6cfc05f0d27d697db3b63d6101e799014323b586";

  

    axios.post(api, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        //console.log(res);
        const filteredArray = res.data.recognition_results.filter((item) => {
          return item.prob >= 0.1;
        }) ;

        let i;
        var arr = [];
        for (i = 0; i < filteredArray.length; i++) {
          arr.push(filteredArray[i].name);
        }
        // console.log(arr);
        var s;
        if (arr.length === 1) {
          text_search(arr[0]);
        } else {
          s = arr[0];
          for (let i = 1; i < arr.length - 1; i++) {
            s = s + " and " + arr[i];
          }
          s = s + " and " + arr[arr.length - 1];
          // console.log(s);
          text_search(s);
        }
      })
      .catch((error)=>
      {
        if(error.response.status===400)
        {
            //console.log("HI");
            alert("File should be in jpg or jpeg format");
        }
        else if(error.response.status===413)
        {
          alert("File size is greater than 1 MB");
        }
      });
     
  };

  
  
    
    return (
      
      <div>
        
        <div class="div1"></div>
        <div class="bg-text">
        <h3>Image Search</h3>
        <p class="image">(file size must be less than 1MB and it must be in jpg or jpeg format)</p>
        <br/>
          <input type="file" onChange={(e)=>setSelfile(e.target.files[0])} />
          <button  class="bt" onClick={onFileUpload} className={classes.root}>Upload!</button>
          <h3>Text Search</h3>
          <p class="image">(If you want to search multiple food items then add "and" between their names. e.g. banana and cava)</p>
          <br/>
          
          
          {/* <form onSubmit={(e)=>text_search(str)}> */}
          <input
            type="text"
            placeholder="Enter your food name" 
            onChange={(event) => setStr(event.target.value)}
          />
          <input type="button" value="Submit" onClick={(e)=>text_search(str)} />
          {/* </form> */}
         




          
          {console.log(str)}
          
         </div>
        <br/><br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div  class="las">
          {
          fin.length > 0 && (<RecipeReviewCard data={fin}/>)}
         
        </div>
      </div>
    );
  
}

export default App;
