const UI =require('./ui');

const {clientid, clientS}= require('./config.json');
const Github = require('./github');

const github = new Github(clientid,clientS);
const ui = new UI();

//console.log(github.fetchUser('carlosdan8co'));

const userForm = document.getElementById('userForm');

userForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const textSearch = document.getElementById('textSearch').value;
    if(textSearch!==''){
        github.fetchUser(textSearch)
            .then(data=>{
                if(data.userData.message==='Not Found'){
                    ui.showMessage('User not found','alert alert-danger col-md-12 mt-12');
                }else{
                ui.showProfile(data.userData);
                ui.showRepositories(data.repositories)
            }
            })
    }
})