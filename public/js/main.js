const submitBtn        = document.getElementById('submitBtn');
const cityName         = document.getElementById('cityName')
const city_name        = document.getElementById('city_name')
const temp_val         = document.getElementById('temp_val')
const temp_status      = document.getElementById('temp_status')
const middleLayer      = document.querySelector('.middle_layer')
const day              = document.getElementById('day')
const today_date       = document.getElementById('today_date')


const array = new Array(7)
array[0] = "Sunday";
array[1] = "Monday";
array[2] = "Tuesday";
array[3] = "Wednesday";
array[4] = "Thursday";
array[5] = "Friday";
array[6] = "Saturday";


const months = new Array(7)
months[0] = "Jan";
months[1] = "Feb";
months[2] = "Mar";
months[3] = "Apr";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "Aug";
months[8] = "Sept";
months[9] = "Oct";
months[10] = "Nov";
months[11] = "Dec";
const date = new Date()
day.innerText =array[date.getDay()-1]
  
today_date.innerText = months[date.getMonth()]+', '+ date.getDate();

const submitForm = async(event)=>{
    event.preventDefault();
    let cityval = cityName.value;
    if(cityval===""){
        city_name.innerText=`Please Enter the City Name properly.`;
        middleLayer.classList.add('data_hide')
    }else{
        try{
        let url               =`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=6c9d999b6d3d993c718b61bdd93c57b9`
        let response          = await fetch(url);
        response              = await response.json();
        city_name.innerText    = `${response.name}, ${response.sys.country}`
        temp_val.innerText    = response.main.temp;
        // if(response.weather[0].main=="Clear"){
        //     temp_status.innerHTML = `<i  title="${response.weather[0].description}" class="fas fa-sun img_icons" style='color:#eccc68;'></i>`
        // }else{
            temp_status.innerHTML = `<img class="img_icons" title="${response.weather[0].description}" src=https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png />`
        // }
        
        middleLayer.classList.remove('data_hide')
        }catch{
            city_name.innerText='Please Enter the City Name properly.';
            middleLayer.classList.add('data_hide');
        }


    }
    
}


submitBtn.addEventListener('click',submitForm)
