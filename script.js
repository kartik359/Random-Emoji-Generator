const access_key="1d120b27d108ea58cb5d8ea84957365af34e03a6";
const search_api="https://emoji-api.com/emojis?search=computer&access_key=123412341234";
const api="https://emoji-api.com/emojis?access_key=123412341234"
const search_btn=document.getElementById('button1');
const btn=document.getElementById('button2');
const input=document.getElementById('search');
const parent=document.getElementById('display');
const desc=document.getElementById('description');
let text;
search_btn.addEventListener('click',()=>{
text=input.value;
if(text.trim()==='')
{
    alert('input field can not be empty');
}
fetch_data_1(text);

})
async function fetch_data_1(input)
{
    let data=await fetch(`https://emoji-api.com/emojis?search=${input}&access_key=${access_key}`);
    let response=await  data.json();
    let image=response[0].character;
    parent.innerHTML=`<p class='kartik'>${image}</p>`;
      result=response[0].unicodeName;
     let arr=result.split(' ');
     let collect="";
     for(let i=1;i<arr.length;i++)
     {
      collect=collect+" "+arr[i];
     }
     desc.innerHTML=`<h2>${collect}</h2>`;

}
async function fetch_data_2()
{
    let data=await fetch(`https://emoji-api.com/emojis?access_key=${access_key}`);
    let response=await  data.json();
    console.log(response);
    let random_no=Math.floor(Math.random()*response.length);
    let image=response[random_no].character;
    parent.innerHTML=`<p class='kartik'>${image}</p>`;
    result=response[random_no].unicodeName;
     let arr=result.split(' ');
     let collect="";
     for(let i=1;i<arr.length;i++)
     {
      collect=collect+" "+arr[i];
     }
     desc.innerHTML=`<h2>${collect}</h2>`;
    console.log(collect);

}
btn.addEventListener('click',()=>{

fetch_data_2();

})