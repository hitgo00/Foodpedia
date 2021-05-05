import axios from "axios";
import React, { useState } from 'react';
import { debounce } from "lodash";
import "./search.css";
import { makeStyles } from '@material-ui/core/styles';
import RecipeReviewCard from "../card/index"
import pic1 from "./dem1.png"
import pic2 from './dem2.png'

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


function App() {
    const classes = useStyles();
    const formData = new FormData();
    
    // Initially, no file is selected
    //selfile: null
    const [fin, setFin] = useState([]);
    const[selfile,setSelfile]=useState(null);
    const[str, setStr]=useState("");

  
    //text_search
    const text_search = debounce((query) => {

    const request = require("request");
    request.get(
      {
        url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
        headers: {
          "X-Api-Key": "abP0Rcr8oo8uivQCa01/XQ==glWmr5wyMWy5Zsad",
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
             alert("Entered Text does not contain any food name");
             window.location.reload();
          }
          
         // this.setState({ selfile: this.state.selfile, fin: fin1 });
          setFin(fin1);
          if(fin1.length>0)
          {
            document.getElementById("ask").style.display="none";
          }
        }

      }
    );
    
   
  },400);

 

 const onFileUpload = debounce(() => {

  var elem=document.getElementById("load");
    
    elem.innerHTML="Loading...";
    
    formData.append(
      "image",
      selfile,
      selfile.name
    );


    const api =
      "https://api.logmeal.es/v2/recognition/dish/v0.8?skip_types=%5B1%2C3%5D&language=eng";
    const token = "6dc73ae0e01c829ed1b284cf0f57caa77a92fe09";

  

    axios.post(api, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {

        const filteredArray = res.data.recognition_results.filter((item) => {
          return item.prob >= 0.1;
        }) ;

        let i;
        var arr = [];
        for (i = 0; i < filteredArray.length; i++) {
          arr.push(filteredArray[i].name);
        }
    
        var s;
        if (arr.length === 1) {
          text_search(arr[0]);
        } else {
          s = arr[0];
          for (let i = 1; i < arr.length - 1; i++) {
            s = s + " and " + arr[i];
          }
          s = s + " and " + arr[arr.length - 1];
        
          text_search(s);
        }
      })
      .catch((error)=>
      {
        if(error.response.status===400)
        {
            
          alert("File should be in jpg or jpeg format")
          window.location.reload();
      
        }
        else if(error.response.status===413)
        {
          
           alert("File size is greater than 1 MB");
           window.location.reload();

        }
      });
      
  },400);

  
  
    
    return (
      <div>
      
     <div class="first"  id="ask">
        
        <div class="div1"></div>

          <div class="box1">
          "Nutrition is the only remedy that can bring full recovery and can be used with any treatment. Remember, food is our best medicine!"
          </div>
          <div class="box2">
           - Bernard Jensen
          </div>
          <div class="box">
          Know your food's nutritional values
          </div>

          <div class="bg-text">
        <h3>Image Search</h3>
        <p >(file size must be less than 1MB and it must be in jpg or jpeg format)</p>
        <br/>
          <input type="file" onChange={(e)=>setSelfile(e.target.files[0])} />
          <button  class="bt" onClick={onFileUpload} className={classes.root} id="load">Upload!</button>
          <br/>
          <h3>Text Search</h3>
          <br/>
          
          
          <input
            type="text"
            placeholder="Enter your food name" 
            onChange={(event) => setStr(event.target.value)}
          />
          
           <input type="button" id="load2" value="Submit" onClick={(e)=>{var elem=document.getElementById("load2");
            elem.value="Loading...";
            text_search(str);
            
          }}/> 
          </div>



          <div class="footer">

          
           <h3 class="head">Type anything you want.</h3>  <p>The  text search tool will detect food items from the text automatically and give their nutritional values.</p>
            <br/>
          <img src={pic1} alt="demo1" class="demo" />
          <h3 class="head">Or Upload a photo</h3><p>The image search tool will detect food item from the image automatically and give nutritional values.</p>
          <br/>
          <img src={pic2} alt="demo2" class="demo" />



          
          </div>
         
         
       </div> 
        
       
          { fin.length>0 && < RecipeReviewCard data={fin}/>} 
     
   </div>
    );
  
}

export default App;
